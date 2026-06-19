// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useExam } from "../context/ExamContext";
// import { useToast } from "../context/ToastContext";
// import {
//   FiUser,
//   FiMoon,
//   FiSun,
//   FiLogOut,
//   FiTrash2,
//   FiBell,
//   FiShield,
//   FiGlobe,
//   FiChevronRight,
//   FiEdit2,
//   FiCheck,
//   FiRefreshCw,
//   FiLock,
//   FiMail,
//   FiBriefcase,
//   FiSave,
//     FiSettings,
// } from "react-icons/fi";

// const Settings = () => {
//   const { user, logout, updateProfile } = useAuth();
//   const { examHistory, resetExam } = useExam();
//   const { addToast } = useToast();
//   const navigate = useNavigate();

//   // Dark mode state (sync with localStorage and Navbar)
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });
//   const [notifications, setNotifications] = useState(() => {
//     return localStorage.getItem("notifications") === "true" || true;
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: user?.name || "",
//     department: user?.department || "",
//     email: user?.email || "",
//   });

//   // Apply dark mode when toggled
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   // Save notifications preference
//   useEffect(() => {
//     localStorage.setItem("notifications", JSON.stringify(notifications));
//   }, [notifications]);

//   const handleLogout = () => {
//     logout();
//     addToast("Logged out successfully", "info");
//     navigate("/login");
//   };

//   const handleClearHistory = () => {
//     if (
//       window.confirm(
//         "Are you sure you want to clear all exam history? This cannot be undone.",
//       )
//     ) {
//       localStorage.removeItem("examHistory");
//       addToast("Exam history cleared", "success");
//       // Reload the page or force refresh of context? Better to reload.
//       window.location.reload();
//     }
//   };

//   const handleSaveProfile = () => {
//     updateProfile(profileData);
//     setIsEditing(false);
//     addToast("Profile updated successfully!", "success");
//   };

//   const handleEditToggle = () => {
//     if (isEditing) {
//       // Cancel edit – reset to original data
//       setProfileData({
//         name: user?.name || "",
//         department: user?.department || "",
//         email: user?.email || "",
//       });
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
//       <div className="glass-card rounded-2xl p-6">
//         <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
//           <FiSettings className="text-blue-500" /> Settings
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400">
//           Manage your account preferences
//         </p>
//       </div>

//       {/* Profile Section */}
//       <div className="glass-card rounded-2xl p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <FiUser className="text-blue-500" /> Profile
//           </h2>
//           <button
//             onClick={handleEditToggle}
//             className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
//           >
//             {isEditing ? <FiCheck /> : <FiEdit2 />}
//             {isEditing ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         {isEditing ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 value={profileData.name}
//                 onChange={(e) =>
//                   setProfileData({ ...profileData, name: e.target.value })
//                 }
//                 className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Department
//               </label>
//               <input
//                 type="text"
//                 value={profileData.department}
//                 onChange={(e) =>
//                   setProfileData({ ...profileData, department: e.target.value })
//                 }
//                 className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 value={profileData.email}
//                 disabled
//                 className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
//               />
//             </div>
//             <button
//               onClick={handleSaveProfile}
//               className="btn-primary flex items-center gap-2"
//             >
//               <FiSave /> Save Changes
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-2">
//             <div className="flex items-center gap-3">
//               <FiUser className="text-gray-400" />
//               <div>
//                 <p className="text-sm text-gray-500">Name</p>
//                 <p className="font-medium">{user?.name}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <FiBriefcase className="text-gray-400" />
//               <div>
//                 <p className="text-sm text-gray-500">Department</p>
//                 <p className="font-medium">{user?.department}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <FiMail className="text-gray-400" />
//               <div>
//                 <p className="text-sm text-gray-500">Email</p>
//                 <p className="font-medium">{user?.email}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Appearance */}
//       <div className="glass-card rounded-2xl p-6">
//         <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
//           <FiGlobe className="text-blue-500" /> Appearance
//         </h2>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
//             <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
//           </div>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
//               darkMode ? "bg-blue-600" : "bg-gray-300"
//             }`}
//           >
//             <span
//               className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
//                 darkMode ? "transform translate-x-6" : ""
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Notifications */}
//       <div className="glass-card rounded-2xl p-6">
//         <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
//           <FiBell className="text-blue-500" /> Notifications
//         </h2>
//         <div className="flex items-center justify-between">
//           <span>Enable notifications</span>
//           <button
//             onClick={() => setNotifications(!notifications)}
//             className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
//               notifications ? "bg-blue-600" : "bg-gray-300"
//             }`}
//           >
//             <span
//               className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
//                 notifications ? "transform translate-x-6" : ""
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Account */}
//       <div className="glass-card rounded-2xl p-6">
//         <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
//           <FiShield className="text-blue-500" /> Account
//         </h2>
//         <div className="space-y-3">
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-between p-3 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
//           >
//             <span className="flex items-center gap-3 text-red-600">
//               <FiLogOut /> Logout
//             </span>
//             <FiChevronRight className="text-red-400" />
//           </button>
//           <button
//             onClick={handleClearHistory}
//             className="w-full flex items-center justify-between p-3 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
//           >
//             <span className="flex items-center gap-3 text-yellow-600">
//               <FiTrash2 /> Clear Exam History
//             </span>
//             <FiChevronRight className="text-yellow-400" />
//           </button>
//         </div>
//       </div>

//       {/* Stats footer */}
//       <div className="text-center text-sm text-gray-500">
//         <p>Total exams taken: {examHistory.length}</p>
//         <p className="mt-1">
//           Account created:{" "}
//           {user?.createdAt
//             ? new Date(user.createdAt).toLocaleDateString()
//             : "N/A"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Settings;
// src/pages/Settings.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useExam } from '../context/ExamContext';
import { useToast } from '../context/ToastContext';
import {
  FiUser, FiMoon, FiSun, FiLogOut, FiTrash2, FiBell,
  FiShield, FiGlobe, FiChevronRight, FiEdit2, FiCheck,
  FiMail, FiBriefcase, FiSave, FiSettings, FiAlertTriangle, FiX
} from 'react-icons/fi';

const Settings = () => {
  const { user, logout, updateProfile } = useAuth();
  const { examHistory } = useExam();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem('notifications') === 'true' || true;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    department: user?.department || '',
    email: user?.email || '',
  });
  const [showClearModal, setShowClearModal] = useState(false);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully', 'info');
    navigate('/login');
  };

  // Open confirmation modal
  const handleClearClick = () => {
    setShowClearModal(true);
  };

  // Actual clear action
  const handleConfirmClear = () => {
    setShowClearModal(false);
    localStorage.removeItem('examHistory');
    addToast('Exam history cleared successfully', 'success');
    // Refresh the page to reflect changes in contexts (optional)
    window.location.reload();
  };

  const handleCancelClear = () => {
    setShowClearModal(false);
  };

  const handleSaveProfile = () => {
    updateProfile(profileData);
    setIsEditing(false);
    addToast('Profile updated successfully!', 'success');
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setProfileData({
        name: user?.name || '',
        department: user?.department || '',
        email: user?.email || '',
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-6">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <FiSettings className="text-blue-500" /> Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      {/* Profile Section */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FiUser className="text-blue-500" /> Profile
          </h2>
          <button
            onClick={handleEditToggle}
            className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
          >
            {isEditing ? <FiCheck /> : <FiEdit2 />}
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <input
                type="text"
                value={profileData.department}
                onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={profileData.email}
                disabled
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              />
            </div>
            <button
              onClick={handleSaveProfile}
              className="btn-primary flex items-center gap-2"
            >
              <FiSave /> Save Changes
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FiUser className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiBriefcase className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">{user?.department}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Appearance */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FiGlobe className="text-blue-500" /> Appearance
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
              darkMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                darkMode ? 'transform translate-x-6' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FiBell className="text-blue-500" /> Notifications
        </h2>
        <div className="flex items-center justify-between">
          <span>Enable notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
              notifications ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                notifications ? 'transform translate-x-6' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Account */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FiShield className="text-blue-500" /> Account
        </h2>
        <div className="space-y-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          >
            <span className="flex items-center gap-3 text-red-600">
              <FiLogOut /> Logout
            </span>
            <FiChevronRight className="text-red-400" />
          </button>
          <button
            onClick={handleClearClick}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
          >
            <span className="flex items-center gap-3 text-yellow-600">
              <FiTrash2 /> Clear Exam History
            </span>
            <FiChevronRight className="text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Stats footer */}
      <div className="text-center text-sm text-gray-500">
        <p>Total exams taken: {examHistory.length}</p>
        <p className="mt-1">Account created: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
      </div>

      {/* Confirmation Modal for Clear History */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="glass-card rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all animate-slide-up">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <FiAlertTriangle size={28} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Clear History?</h3>
              </div>
              <button
                onClick={handleCancelClear}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-300">
                This will permanently delete all your exam history, including scores and answers.
                This action cannot be undone.
              </p>
              <div className="mt-2 text-sm text-gray-500">
                <p>You have {examHistory.length} exam records stored.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={handleCancelClear}
                className="btn-secondary flex-1 sm:flex-none"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClear}
                className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700"
              >
                <FiTrash2 /> Clear History
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;