import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useExam } from "../context/ExamContext";
import { useToast } from "../context/ToastContext";
import {
  FiUser,
  FiMail,
  FiBriefcase,
  FiEdit2,
  FiSave,
  FiX,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { examHistory } = useExam();
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    department: user?.department || "",
    bio: user?.bio || "Student at Online Examination System",
  });

  const totalExamsTaken = examHistory.length;
  const totalScore = examHistory.reduce(
    (sum, exam) => sum + parseFloat(exam.score),
    0,
  );
  const averageScore =
    totalExamsTaken > 0 ? (totalScore / totalExamsTaken).toFixed(2) : 0;
  const passedExams = examHistory.filter((e) => e.passed).length;

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    addToast("Profile updated successfully!", "success");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Profile Header */}
      <div className="glass-card rounded-2xl p-6 text-center">
        <div className="relative inline-block">
          <img
            src={
              user?.avatar ||
              `https://ui-avatars.com/api/?name=${user?.name || "User"}&size=120`
            }
            alt={user?.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mx-auto"
          />
          <button className="absolute bottom-2 right-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
            <FiEdit2 size={14} />
          </button>
        </div>
        <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{user?.department}</p>
        <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-4 text-center">
          <FiBarChart2 size={24} className="mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold">{totalExamsTaken}</div>
          <div className="text-sm text-gray-600">Exams Taken</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <FiAward size={24} className="mx-auto mb-2 text-green-600" />
          <div className="text-2xl font-bold">{averageScore}%</div>
          <div className="text-sm text-gray-600">Avg Score</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{passedExams}</div>
          <div className="text-sm text-gray-600">Passed</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-red-600">
            {totalExamsTaken - passedExams}
          </div>
          <div className="text-sm text-gray-600">Failed</div>
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Profile Information</h3>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <FiEdit2 /> Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                <FiSave /> Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                <FiX /> Cancel
              </button>
            </div>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 rounded-xl border focus:border-blue-500"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FiUser className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiBriefcase className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">{user?.department}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
