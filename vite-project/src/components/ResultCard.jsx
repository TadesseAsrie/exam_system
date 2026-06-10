import React from "react";
import {
  FiCheckCircle,
  FiXCircle,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

const ResultCard = ({ result }) => {
  const percentage = parseFloat(result.score);
  const isPassed = result.passed;

  return (
    <div className="glass-card rounded-2xl p-6 animate-slide-up">
      <div className="text-center mb-6">
        <div
          className={`inline-flex p-3 rounded-full ${isPassed ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"} mb-3`}
        >
          {isPassed ? (
            <FiAward size={40} className="text-green-600" />
          ) : (
            <FiTrendingUp size={40} className="text-red-600" />
          )}
        </div>
        <h2 className="text-2xl font-bold">{result.examTitle}</h2>
        <p
          className={`text-lg font-semibold mt-2 ${isPassed ? "text-green-600" : "text-red-600"}`}
        >
          {isPassed ? "PASSED" : "FAILED"}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-2xl font-bold text-blue-600">
            {result.totalQuestions}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Questions
          </div>
        </div>
        <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-2xl font-bold text-green-600">
            {result.correctAnswers}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Correct
          </div>
        </div>
        <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-2xl font-bold text-red-600">
            {result.wrongAnswers}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Wrong</div>
        </div>
        <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-2xl font-bold text-purple-600">
            {result.score}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
        </div>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-xs font-semibold inline-block text-blue-600">
            Performance
          </div>
          <div className="text-xs font-semibold inline-block text-blue-600">
            {percentage}%
          </div>
        </div>
        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            style={{ width: `${percentage}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${isPassed ? "bg-green-500" : "bg-red-500"}`}
          ></div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Completed on: {new Date(result.date).toLocaleString()}
      </div>
    </div>
  );
};

export default ResultCard;
