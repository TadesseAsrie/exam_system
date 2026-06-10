import React, { createContext, useContext, useState, useEffect } from "react";
import { exams } from "../data/exams";
import { getQuestionsByExamId } from "../data/questions";

const ExamContext = createContext();

export const useExam = () => useContext(ExamContext);

export const ExamProvider = ({ children }) => {
  const [allExams, setAllExams] = useState(exams);
  const [currentExam, setCurrentExam] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [examResults, setExamResults] = useState(null);
  const [examHistory, setExamHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("examHistory");
    if (storedHistory) {
      setExamHistory(JSON.parse(storedHistory));
    }
  }, []);

  const loadExam = (examId) => {
    const exam = allExams.find((e) => e.id === examId);
    if (exam) {
      setCurrentExam(exam);
      const questions = getQuestionsByExamId(examId);
      setCurrentQuestions(questions);
      setUserAnswers({});
      return exam;
    }
    return null;
  };

  const saveAnswer = (questionId, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const submitExam = () => {
    if (!currentExam || !currentQuestions.length) return null;

    let correct = 0;
    const detailedResults = currentQuestions.map((question) => {
      const userAnswer = userAnswers[question.id];
      const isCorrect = userAnswer === question.correct;
      if (isCorrect) correct++;
      return {
        questionId: question.id,
        questionText: question.text,
        userAnswer,
        correctAnswer: question.correct,
        isCorrect,
        options: question.options,
      };
    });

    const total = currentQuestions.length;
    const score = (correct / total) * 100;
    const passed = score >= 40;

    const result = {
      examId: currentExam.id,
      examTitle: currentExam.title,
      totalQuestions: total,
      correctAnswers: correct,
      wrongAnswers: total - correct,
      score: score.toFixed(2),
      passed,
      date: new Date().toISOString(),
      detailedResults,
      userAnswers,
      duration: currentExam.duration,
      subject: currentExam.subject,
    };

    setExamResults(result);

    // Save to history
    const updatedHistory = [result, ...examHistory].slice(0, 20);
    setExamHistory(updatedHistory);
    localStorage.setItem("examHistory", JSON.stringify(updatedHistory));

    return result;
  };

  const resetExam = () => {
    setCurrentExam(null);
    setCurrentQuestions([]);
    setUserAnswers({});
    setExamResults(null);
  };

  const getExamStatistics = () => {
    const completedExams = examHistory.length;
    const averageScore =
      completedExams > 0
        ? examHistory.reduce((sum, r) => sum + parseFloat(r.score), 0) /
          completedExams
        : 0;

    const passedExams = examHistory.filter((r) => r.passed).length;

    return {
      totalExams: allExams.length,
      completedExams,
      pendingExams: allExams.length - completedExams,
      averageScore: averageScore.toFixed(2),
      passRate:
        completedExams > 0
          ? ((passedExams / completedExams) * 100).toFixed(2)
          : 0,
      recentActivity: examHistory.slice(0, 5),
      upcomingExams: allExams
        .filter((e) => !examHistory.some((h) => h.examId === e.id))
        .slice(0, 3),
    };
  };

  const value = {
    allExams,
    currentExam,
    currentQuestions,
    userAnswers,
    examResults,
    examHistory,
    loadExam,
    saveAnswer,
    submitExam,
    resetExam,
    getExamStatistics,
  };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
};
