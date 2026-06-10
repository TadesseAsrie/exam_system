import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useExam } from "../context/ExamContext";
import { useToast } from "../context/ToastContext";
import {
  FiClock,
  FiFileText,
  FiAlertCircle,
  FiPlay,
  FiArrowLeft,
} from "react-icons/fi";

const ExamInstructions = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { loadExam, currentExam } = useExam();
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const exam = loadExam(parseInt(examId));
    if (!exam) {
      addToast("Exam not found", "error");
      navigate("/exams");
    }
    setIsLoading(false);
  }, [examId]);

  if (isLoading || !currentExam) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-center">Loading instructions...</div>
      </div>
    );
  }

  const handleStartExam = () => {
    navigate(`/exam/${examId}/take`);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="glass-card rounded-2xl p-6 md:p-8">
        <button
          onClick={() => navigate("/exams")}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-6"
        >
          <FiArrowLeft /> Back to Exams
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {currentExam.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {currentExam.subject}
            </span>
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
              {currentExam.difficulty}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <FiClock size={24} className="mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">{currentExam.duration} min</div>
            <div className="text-sm text-gray-600">Time Duration</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <FiFileText size={24} className="mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">
              {currentExam.totalQuestions}
            </div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <FiAlertCircle size={24} className="mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold">
              {currentExam.marksPerQuestion}
            </div>
            <div className="text-sm text-gray-600">Marks per Question</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Total duration: {currentExam.duration} minutes. Timer will
                  start as soon as you begin.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  The exam contains {currentExam.totalQuestions} multiple-choice
                  questions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Each question carries {currentExam.marksPerQuestion} mark. No
                  negative marking.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Once you submit, answers cannot be changed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Do not refresh the page during the exam.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Ensure stable internet connection before starting.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleStartExam}
            className="btn-primary px-8 py-3 text-lg flex items-center gap-2"
          >
            <FiPlay /> Start Examination
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
