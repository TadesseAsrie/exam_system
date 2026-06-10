import React from "react";
import { useNavigate } from "react-router-dom";
import { FiClock, FiFileText, FiTrendingUp, FiPlay } from "react-icons/fi";

const ExamCard = ({ exam }) => {
  const navigate = useNavigate();

  const difficultyColors = {
    Easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    Hard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden card-hover animate-fade-in">
      <div className="relative h-40 overflow-hidden">
        <img
          src={
            exam.image ||
            `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400`
          }
          alt={exam.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[exam.difficulty]}`}
          >
            {exam.difficulty}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{exam.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {exam.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <FiClock size={14} />
            <span>{exam.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <FiFileText size={14} />
            <span>{exam.totalQuestions} Qs</span>
          </div>
          <div className="flex items-center gap-1">
            <FiTrendingUp size={14} />
            <span>{exam.marksPerQuestion} mark each</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/exam/${exam.id}/instructions`)}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          <FiPlay size={16} />
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
