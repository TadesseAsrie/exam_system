
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useExam } from "../context/ExamContext";
import ResultCard from "../components/ResultCard";
import {
  FiCheckCircle,
  FiXCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const Result = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { examResults, resetExam, allExams } = useExam();
  const [result, setResult] = useState(null);
  const [expanded, setExpanded] = useState(null); // track which question is expanded, or all

  useEffect(() => {
    if (!examResults) {
      navigate("/exams");
      return;
    }
    setResult(examResults);
  }, [examResults]);

  const handleRetake = () => {
    resetExam();
    localStorage.removeItem(`exam_${examId}_completed`);
    navigate(`/exam/${examId}/instructions`);
  };

  // Toggle expanded view for a specific question
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  if (!result) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Summary Card */}
      <ResultCard result={result} />

      {/* Detailed Breakdown */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiCheckCircle className="text-green-500" /> Question Review
        </h3>
        <div className="space-y-4">
          {result.detailedResults.map((item, index) => (
            <div
              key={item.questionId}
              className={`border-l-4 rounded-xl p-4 transition-all ${
                item.isCorrect
                  ? "border-green-500 bg-green-50 dark:bg-green-900/10"
                  : "border-red-500 bg-red-50 dark:bg-red-900/10"
              }`}
            >
              <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Q{index + 1}.</span>
                    <span className="text-sm font-medium">
                      {item.questionText}
                    </span>
                    {item.isCorrect ? (
                      <FiCheckCircle
                        className="text-green-600 ml-2"
                        size={18}
                      />
                    ) : (
                      <FiXCircle className="text-red-600 ml-2" size={18} />
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Your answer:{" "}
                      <span
                        className={`font-semibold ${item.isCorrect ? "text-green-600" : "text-red-600"}`}
                      >
                        {item.userAnswer || "Not answered"}
                      </span>
                    </span>
                    {!item.isCorrect && (
                      <span className="text-gray-600 dark:text-gray-400">
                        Correct answer:{" "}
                        <span className="font-semibold text-green-600">
                          {item.correctAnswer}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
                <div className="ml-4 text-gray-400">
                  {expanded === index ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </div>

              {/* Expanded view: show all options with correct/incorrect highlighting */}
              {expanded === index && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 gap-2">
                    {item.options.map((option, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isUserSelected = item.userAnswer === letter;
                      const isCorrectAnswer = item.correctAnswer === letter;
                      let bgClass = "bg-gray-50 dark:bg-gray-800";
                      if (isCorrectAnswer)
                        bgClass =
                          "bg-green-100 dark:bg-green-900/30 border-green-400";
                      else if (isUserSelected && !isCorrectAnswer)
                        bgClass =
                          "bg-red-100 dark:bg-red-900/30 border-red-400";

                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-3 p-2 rounded-lg border ${bgClass}`}
                        >
                          <span className="font-mono text-sm font-bold w-6">
                            {letter}
                          </span>
                          <span className="flex-1">{option}</span>
                          {isCorrectAnswer && (
                            <FiCheckCircle
                              className="text-green-600"
                              size={16}
                            />
                          )}
                          {isUserSelected && !isCorrectAnswer && (
                            <FiXCircle className="text-red-600" size={16} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Explanation:{" "}
                    {item.explanation || "No explanation provided."}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={handleRetake}
          className="btn-secondary flex items-center gap-2"
        >
          Retake Exam
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="btn-secondary flex items-center gap-2"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Result;
