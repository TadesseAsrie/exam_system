import React, { useState, useEffect } from "react";
import { useExam } from "../context/ExamContext";
import ExamCard from "../components/ExamCard";
import { ExamCardSkeleton } from "../components/LoadingSkeleton";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

const Exams = () => {
  const { allExams } = useExam();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const subjects = ["All", ...new Set(allExams.map((exam) => exam.subject))];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  let filteredExams = allExams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject =
      selectedSubject === "All" || exam.subject === selectedSubject;
    const matchesDifficulty =
      selectedDifficulty === "All" || exam.difficulty === selectedDifficulty;
    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  // Sorting
  if (sortBy === "duration-asc")
    filteredExams.sort((a, b) => a.duration - b.duration);
  if (sortBy === "duration-desc")
    filteredExams.sort((a, b) => b.duration - a.duration);
  if (sortBy === "title-asc")
    filteredExams.sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "title-desc")
    filteredExams.sort((a, b) => b.title.localeCompare(a.title));

  const totalPages = Math.ceil(filteredExams.length / itemsPerPage);
  const paginatedExams = filteredExams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Available Examinations
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Choose from our comprehensive collection of practice tests
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card rounded-2xl p-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search exams by title or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500"
            />
          </div>

          <div className="flex gap-3">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {subjects.map((sub) => (
                <option key={sub}>{sub}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {difficulties.map((diff) => (
                <option key={diff}>{diff}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <option value="default">Sort by: Default</option>
              <option value="duration-asc">Duration: Short to Long</option>
              <option value="duration-desc">Duration: Long to Short</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Exam Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <ExamCardSkeleton key={i} />
          ))}
        </div>
      ) : paginatedExams.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border disabled:opacity-50"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-xl ${currentPage === i + 1 ? "bg-blue-600 text-white" : "border"}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center">
          <FiSearch size={64} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No exams found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Exams;
