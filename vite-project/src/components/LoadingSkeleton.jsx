import React from "react";

export const ExamCardSkeleton = () => (
  <div className="glass-card rounded-2xl overflow-hidden animate-pulse">
    <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
    <div className="p-5">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-full"></div>
      <div className="flex gap-4 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
      </div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
    </div>
  </div>
);

export const TableRowSkeleton = () => (
  <div className="flex items-center gap-4 p-4 animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
    <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
  </div>
);
