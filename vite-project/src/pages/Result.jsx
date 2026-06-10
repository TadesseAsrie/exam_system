import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useExam } from "../context/ExamContext";
import ResultCard from "../components/ResultCard";
import { FiRotateCcw, FiHome, FiDownload } from "react-icons/fi";

const Result = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { examResults, resetExam, allExams } = useExam();
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!examResults) {
      navigate("/exams");
      return;
    }
    setResult(examResults);
  }, [examResults]);

  const handleRetake = () => {
    resetExam();
    navigate(`/exam/${examId}/instructions`);
  };

  if (!result) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <ResultCard result={result} />

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={handleRetake}
          className="btn-secondary flex items-center gap-2"
        >
          <FiRotateCcw /> Retake Exam
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="btn-secondary flex items-center gap-2"
        >
          <FiHome /> Dashboard
        </button>
        <button className="btn-primary flex items-center gap-2">
          <FiDownload /> Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Result;
