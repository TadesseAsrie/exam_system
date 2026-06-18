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





// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useExam } from "../context/ExamContext";
// import { FiHome, FiDownload } from "react-icons/fi";

// const Result = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();
//   const { examResults, currentQuestions, userAnswers } = useExam();
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     if (!examResults) {
//       navigate("/exams");
//       return;
//     }
//     setResult(examResults);
//     // Lock the exam after submission
//     localStorage.setItem(`exam_${examId}_completed`, "true");
//   }, [examResults, examId, navigate]);

//   // Compute per-question breakdown
//   const getBreakdown = () => {
//     if (!currentQuestions || !userAnswers) return null;
//     let correctCount = 0;
//     const details = currentQuestions.map((q) => {
//       const userAns = userAnswers[q.id] || null;
//       const isCorrect = userAns === q.correct;
//       if (isCorrect) correctCount++;
//       return {
//         question: q.question,
//         options: { A: q.A, B: q.B, C: q.C, D: q.D },
//         userAnswer: userAns,
//         correctAnswer: q.correct,
//         correctDisplay: `${q.correct}. ${q[q.correct]}`,
//         isCorrect,
//       };
//     });
//     return { correctCount, failedCount: currentQuestions.length - correctCount, details };
//   };

//   const breakdown = getBreakdown();

//   if (!result || !breakdown) return null;

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
//       {/* Score summary */}
//       <div className="glass-card rounded-2xl p-6 text-center">
//         <h2 className="text-3xl font-bold mb-2">📊 Exam Results</h2>
//         <p className="text-xl">
//           Total Score: <strong>{breakdown.correctCount} / {currentQuestions.length}</strong>
//         </p>
//         <div className="flex justify-center gap-6 mt-2">
//           <span className="text-green-600">✅ Correct: {breakdown.correctCount}</span>
//           <span className="text-red-600">❌ Failed: {breakdown.failedCount}</span>
//         </div>
//       </div>

//       {/* Per-question breakdown */}
//       <div className="space-y-4">
//         {breakdown.details.map((d, idx) => (
//           <div key={idx} className="glass-card rounded-2xl p-4">
//             <p className="font-semibold">
//               {idx + 1}. {d.question}
//             </p>
//             <div className="mt-2 space-y-1">
//               {["A", "B", "C", "D"].map((letter) => {
//                 const isUserChoice = d.userAnswer === letter;
//                 const isCorrectChoice = d.correctAnswer === letter;
//                 return (
//                   <div
//                     key={letter}
//                     className={`flex items-center gap-2 p-1 rounded ${
//                       isUserChoice
//                         ? isCorrectChoice
//                           ? "bg-green-100 dark:bg-green-900/30"
//                           : "bg-red-100 dark:bg-red-900/30"
//                         : ""
//                     }`}
//                   >
//                     <span className="w-6 font-medium">{letter}.</span>
//                     <span>{d.options[letter]}</span>
//                     {isUserChoice && (
//                       <span className="ml-auto text-sm font-medium">
//                         {isCorrectChoice ? "✅ Your choice" : "❌ Your choice"}
//                       </span>
//                     )}
//                     {isCorrectChoice && !isUserChoice && (
//                       <span className="ml-auto text-sm text-green-600">✓ Correct answer</span>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               Correct answer: <span className="font-medium text-green-600">{d.correctDisplay}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Action buttons – NO retake */}
//       <div className="flex flex-wrap gap-4 justify-center">
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="btn-secondary flex items-center gap-2"
//         >
//           <FiHome /> Dashboard
//         </button>
//         <button className="btn-primary flex items-center gap-2">
//           <FiDownload /> Download Certificate
//         </button>
//         <p className="text-sm text-red-500 w-full text-center mt-2">
//           ⛔ Exam completed – you cannot retake this exam.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Result;