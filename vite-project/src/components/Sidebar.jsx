import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBarChart2,
  FiFileText,
  FiUser,
  FiSettings,
  FiTrendingUp,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen }) => {
  const navItems = [
    { path: "/dashboard", icon: FiHome, label: "Dashboard" },
    { path: "/exams", icon: FiFileText, label: "Exams" },
    { path: "/profile", icon: FiUser, label: "Profile" },
    { path: "/results", icon: FiTrendingUp, label: "Results" },
    { path: "/achievements", icon: FiAward, label: "Achievements" },
    { path: "/settings", icon: FiSettings, label: "Settings" },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-20 ${sidebarOpen ? "w-64" : "w-20"}`}
    >
      <div className="flex flex-col h-full py-6">
        <div className="flex-1">
          <nav className="space-y-1 px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "sidebar-link-active" : ""} ${!sidebarOpen && "justify-center"}`
                }
                title={!sidebarOpen ? item.label : ""}
              >
                <item.icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {sidebarOpen && (
          <div className="px-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <FiBookOpen className="text-blue-500" />
                <span className="text-sm font-semibold">Quick Stats</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Exams Taken
                  </span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Avg Score
                  </span>
                  <span className="font-semibold">0%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
