import React from "react";

const QuestionCard = ({ question, index, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="glass-card rounded-2xl p-6 animate-slide-up">
      <div className="mb-4">
        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
          Question {index + 1}
        </span>
        <h3 className="text-lg font-semibold mt-1">{question.text}</h3>
      </div>

      <div className="space-y-3 mt-4">
        {question.options.map((option, optIndex) => {
          const optionLetter = String.fromCharCode(65 + optIndex); // A, B, C, D
          const isSelected = selectedAnswer === optionLetter;

          return (
            <label
              key={optIndex}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={optionLetter}
                checked={isSelected}
                onChange={() => onAnswerSelect(question.id, optionLetter)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="flex-1">{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
