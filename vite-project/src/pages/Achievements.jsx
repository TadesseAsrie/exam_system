// src/pages/Achievements.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useExam } from "../context/ExamContext";
import {
  FiAward,
  FiStar,
  FiCheckCircle,
  FiClock,
  FiBarChart2,
  FiTarget,
  FiTrendingUp,
  FiZap,
  FiBookOpen,
  FiSmile,
  FiThumbsUp,
  FiHeart,
} from "react-icons/fi";

const Achievements = () => {
  const { user } = useAuth();
  const { examHistory, allExams } = useExam();
  const [achievements, setAchievements] = useState([]);
  const [stats, setStats] = useState({
    totalExams: 0,
    completed: 0,
    passed: 0,
    averageScore: 0,
    perfectScores: 0,
    totalQuestionsAnswered: 0,
  });

  useEffect(() => {
    const completed = examHistory.length;
    const passed = examHistory.filter((e) => e.passed).length;
    const avgScore =
      completed > 0
        ? examHistory.reduce((sum, e) => sum + parseFloat(e.score), 0) /
          completed
        : 0;
    const perfect = examHistory.filter(
      (e) => parseFloat(e.score) === 100,
    ).length;
    const totalQ = examHistory.reduce((sum, e) => sum + e.totalQuestions, 0);

    setStats({
      totalExams: allExams.length,
      completed,
      passed,
      averageScore: avgScore,
      perfectScores: perfect,
      totalQuestionsAnswered: totalQ,
    });

    // Build achievements list based on unlocked criteria
    const list = [];

    // First exam
    if (completed >= 1) {
      list.push({
        id: "first_exam",
        icon: FiBookOpen,
        title: "First Steps",
        description: "Completed your first exam",
        unlocked: true,
        progress: 100,
        date: examHistory[examHistory.length - 1]?.date,
      });
    }

    // Exam streaks
    if (completed >= 5) {
      list.push({
        id: "streak_5",
        icon: FiZap,
        title: "Exam Streak (5)",
        description: "Completed 5 exams",
        unlocked: true,
        progress: 100,
        date: examHistory[0]?.date,
      });
    }
    if (completed >= 10) {
      list.push({
        id: "streak_10",
        icon: FiTrendingUp,
        title: "Exam Streak (10)",
        description: "Completed 10 exams",
        unlocked: true,
        progress: 100,
      });
    }
    if (completed >= 20) {
      list.push({
        id: "streak_20",
        icon: FiAward, // replaced FiTrophy
        title: "Exam Master (20)",
        description: "Completed 20 exams",
        unlocked: true,
        progress: 100,
      });
    }

    // Pass rate
    const passRate = completed > 0 ? (passed / completed) * 100 : 0;
    if (passRate >= 50) {
      list.push({
        id: "pass_half",
        icon: FiThumbsUp,
        title: "Half the Battle",
        description: "Passed at least 50% of exams",
        unlocked: true,
        progress: 100,
      });
    }
    if (passRate >= 80) {
      list.push({
        id: "pass_high",
        icon: FiStar,
        title: "Star Performer",
        description: "Passed 80% of exams",
        unlocked: true,
        progress: 100,
      });
    }

    // Perfect scores
    if (perfect >= 1) {
      list.push({
        id: "perfect_first",
        icon: FiAward,
        title: "Perfect Score!",
        description: "Scored 100% on an exam",
        unlocked: true,
        progress: 100,
      });
    }
    if (perfect >= 3) {
      list.push({
        id: "perfect_triple",
        icon: FiStar,
        title: "Perfectionist",
        description: "Scored 100% on 3 exams",
        unlocked: true,
        progress: 100,
      });
    }

    // Average score milestones
    if (avgScore >= 70) {
      list.push({
        id: "avg_70",
        icon: FiBarChart2,
        title: "Above Average",
        description: "Average score > 70%",
        unlocked: true,
        progress: 100,
      });
    }
    if (avgScore >= 85) {
      list.push({
        id: "avg_85",
        icon: FiTarget,
        title: "Top Achiever",
        description: "Average score > 85%",
        unlocked: true,
        progress: 100,
      });
    }

    // Always show some locked achievements as goals
    const lockedAchievements = [
      {
        id: "streak_5",
        icon: FiZap,
        title: "Exam Streak (5)",
        description: "Complete 5 exams",
        unlocked: completed >= 5,
        progress: Math.min((completed / 5) * 100, 100),
      },
      {
        id: "streak_10",
        icon: FiTrendingUp,
        title: "Exam Streak (10)",
        description: "Complete 10 exams",
        unlocked: completed >= 10,
        progress: Math.min((completed / 10) * 100, 100),
      },
      {
        id: "perfect_first",
        icon: FiAward,
        title: "Perfect Score!",
        description: "Score 100% on an exam",
        unlocked: perfect >= 1,
        progress: Math.min((perfect / 1) * 100, 100),
      },
      {
        id: "avg_85",
        icon: FiTarget,
        title: "Top Achiever",
        description: "Average score > 85%",
        unlocked: avgScore >= 85,
        progress: Math.min((avgScore / 85) * 100, 100),
      },
      {
        id: "pass_high",
        icon: FiStar,
        title: "Star Performer",
        description: "Pass 80% of exams",
        unlocked: passRate >= 80,
        progress: Math.min((passRate / 80) * 100, 100),
      },
    ];

    // Merge: if no unlocked achievements, show some locked ones as preview
    const finalList =
      list.length > 0
        ? list
        : lockedAchievements
            .filter((a) => a.unlocked)
            .concat(lockedAchievements.filter((a) => !a.unlocked).slice(0, 3));

    setAchievements(finalList);
  }, [examHistory, allExams]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "Just now";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center">
            <FiAward size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Achievements</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your progress and unlock badges
            </p>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {stats.completed}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Exams Taken
          </div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {stats.passed}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Passed</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {stats.averageScore.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Avg Score
          </div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {stats.perfectScores}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Perfect Scores
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiAward className="text-yellow-500" />
          Your Badges
          <span className="text-sm font-normal text-gray-500 ml-2">
            ({achievements.filter((a) => a.unlocked).length} /{" "}
            {achievements.length})
          </span>
        </h2>
        {achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  ach.unlocked
                    ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                    : "border-gray-200 dark:border-gray-700 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      ach.unlocked
                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <ach.icon
                      size={24}
                      className={
                        ach.unlocked ? "text-yellow-600" : "text-gray-400"
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold flex items-center gap-2">
                      {ach.title}
                      {ach.unlocked && (
                        <FiCheckCircle className="text-green-500" size={16} />
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {ach.description}
                    </p>
                    {ach.date && (
                      <p className="text-xs text-gray-400 mt-1">
                        Unlocked: {formatDate(ach.date)}
                      </p>
                    )}
                    {!ach.unlocked && ach.progress !== undefined && (
                      <div className="mt-2">
                        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-400 transition-all duration-500"
                            style={{ width: `${ach.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {Math.round(ach.progress)}% complete
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <FiAward size={48} className="mx-auto mb-3 opacity-50" />
            <p>No achievements yet. Start taking exams to earn badges!</p>
          </div>
        )}
      </div>

      {/* Motivational Quote */}
      <div className="glass-card rounded-2xl p-6 text-center">
        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
          "Success is not final, failure is not fatal: it is the courage to
          continue that counts."
        </blockquote>
        <p className="text-sm text-gray-500 mt-2">— Winston Churchill</p>
      </div>
    </div>
  );
};

export default Achievements;
