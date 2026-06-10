import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold gradient-bg bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <FiHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
