import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useExam } from "../context/ExamContext";
import {
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiAward,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const Dashboard = () => {
  const { user } = useAuth();
  const { getExamStatistics, examHistory, allExams } = useExam();
  const [stats, setStats] = useState({
    totalExams: 0,
    completedExams: 0,
    pendingExams: 0,
    averageScore: 0,
    recentActivity: [],
    upcomingExams: [],
  });

  useEffect(() => {
    setStats(getExamStatistics());
  }, [examHistory]);

  const statCards = [
    {
      icon: FiBookOpen,
      label: "Total Exams",
      value: stats.totalExams,
      color: "bg-blue-500",
    },
    {
      icon: FiCheckCircle,
      label: "Completed",
      value: stats.completedExams,
      color: "bg-green-500",
    },
    {
      icon: FiClock,
      label: "Pending",
      value: stats.pendingExams,
      color: "bg-yellow-500",
    },
    {
      icon: FiTrendingUp,
      label: "Avg Score",
      value: `${stats.averageScore}%`,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <img
            src={
              user?.avatar ||
              `https://ui-avatars.com/api/?name=${user?.name || "User"}`
            }
            alt={user?.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome back, {user?.name?.split(" ")[0]}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Ready to continue your learning journey?
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <div key={index} className="glass-card rounded-2xl p-5 card-hover">
            <div
              className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-3`}
            >
              <stat.icon size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FiCalendar />
              Recent Activity
            </h2>
            <Link
              to="/results"
              className="text-blue-600 text-sm hover:underline"
            >
              View All
            </Link>
          </div>

          {stats.recentActivity.length > 0 ? (
            <div className="space-y-3">
              {stats.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div>
                    <p className="font-semibold">{activity.examTitle}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${activity.passed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {activity.score}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <FiBookOpen size={48} className="mx-auto mb-3 opacity-50" />
              <p>No exams taken yet</p>
              <Link to="/exams" className="text-blue-600 mt-2 inline-block">
                Start your first exam →
              </Link>
            </div>
          )}
        </div>

        {/* Upcoming Exams */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FiAward />
              Upcoming Exams
            </h2>
            <Link to="/exams" className="text-blue-600 text-sm hover:underline">
              Browse All
            </Link>
          </div>

          {stats.upcomingExams.length > 0 ? (
            <div className="space-y-3">
              {stats.upcomingExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div>
                    <p className="font-semibold">{exam.title}</p>
                    <p className="text-sm text-gray-500">
                      {exam.duration} min • {exam.totalQuestions} questions
                    </p>
                  </div>
                  <Link
                    to={`/exam/${exam.id}/instructions`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Start <FiArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <FiAward size={48} className="mx-auto mb-3 opacity-50" />
              <p>All exams completed! Great job!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
