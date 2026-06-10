import React, { useEffect } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiXCircle,
  FiX,
} from "react-icons/fi";

const Toast = ({ id, message, type, onClose }) => {
  const icons = {
    success: <FiCheckCircle className="text-green-500" size={20} />,
    error: <FiXCircle className="text-red-500" size={20} />,
    warning: <FiAlertCircle className="text-yellow-500" size={20} />,
    info: <FiInfo className="text-blue-500" size={20} />,
  };

  const bgColors = {
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border shadow-lg animate-slide-up ${bgColors[type]}`}
    >
      {icons[type]}
      <span className="flex-1 text-sm">{message}</span>
      <button onClick={onClose} className="hover:opacity-70">
        <FiX size={16} />
      </button>
    </div>
  );
};

export default Toast;
