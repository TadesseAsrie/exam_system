// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useExam } from "../context/ExamContext";
// import { useToast } from "../context/ToastContext";
// import QuestionCard from "../components/QuestionCard";
// import Timer from "../components/Timer";
// import {
//   FiCheckCircle,
//   FiCircle,
//   FiSend,
//   FiChevronLeft,
//   FiChevronRight,
// } from "react-icons/fi";

// const TakeExam = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();
//   const {
//     currentExam,
//     currentQuestions,
//     userAnswers,
//     saveAnswer,
//     submitExam,
//     resetExam,
//   } = useExam();
//   const { addToast } = useToast();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [timeUp, setTimeUp] = useState(false);

//   useEffect(() => {
//     if (!currentExam || currentQuestions.length === 0) {
//       addToast("Exam not found", "error");
//       navigate("/exams");
//     }
//   }, []);

//   const handleAnswerSelect = (questionId, answer) => {
//     saveAnswer(questionId, answer);
//   };

//   const handleSubmit = async () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to submit the exam?",
//     );
//     if (!confirmed) return;

//     setIsSubmitting(true);
//     const result = submitExam();
//     if (result) {
//       addToast("Exam submitted successfully!", "success");
//       navigate(`/exam/${examId}/result`);
//     }
//     setIsSubmitting(false);
//   };

//   const handleTimeUp = () => {
//     setTimeUp(true);
//     addToast("Time is up! Submitting your exam...", "warning");
//     setTimeout(() => {
//       submitExam();
//       navigate(`/exam/${examId}/result`);
//     }, 1500);
//   };

//   const currentQuestion = currentQuestions[currentIndex];
//   const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
//   const answeredCount = Object.keys(userAnswers).length;

//   if (!currentExam || !currentQuestions.length) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <div className="animate-pulse">Loading exam...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4 animate-fade-in">
//       {/* Header */}
//       <div className="glass-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <h2 className="text-xl font-bold">{currentExam.title}</h2>
//           <p className="text-sm text-gray-600">
//             Question {currentIndex + 1} of {currentQuestions.length}
//           </p>
//         </div>
//         <Timer
//           duration={currentExam.duration}
//           onTimeUp={handleTimeUp}
//           isActive={!timeUp}
//         />
//         <button
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//           className="btn-primary flex items-center gap-2 disabled:opacity-50"
//         >
//           <FiSend /> Submit
//         </button>
//       </div>

//       {/* Progress Bar */}
//       <div className="glass-card rounded-2xl p-4">
//         <div className="flex justify-between text-sm mb-2">
//           <span>Progress</span>
//           <span>
//             {answeredCount}/{currentQuestions.length} Answered
//           </span>
//         </div>
//         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-blue-600 transition-all duration-300"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Question Area */}
//         <div className="lg:col-span-3">
//           <QuestionCard
//             question={currentQuestion}
//             index={currentIndex}
//             selectedAnswer={userAnswers[currentQuestion.id]}
//             onAnswerSelect={handleAnswerSelect}
//           />

//           {/* Navigation Buttons */}
//           <div className="flex justify-between mt-4">
//             <button
//               onClick={() => setCurrentIndex((prev) => prev - 1)}
//               disabled={currentIndex === 0}
//               className="btn-secondary flex items-center gap-2 disabled:opacity-50"
//             >
//               <FiChevronLeft /> Previous
//             </button>
//             {currentIndex === currentQuestions.length - 1 ? (
//               <button
//                 onClick={handleSubmit}
//                 className="btn-primary flex items-center gap-2"
//               >
//                 Submit <FiSend />
//               </button>
//             ) : (
//               <button
//                 onClick={() => setCurrentIndex((prev) => prev + 1)}
//                 className="btn-primary flex items-center gap-2"
//               >
//                 Next <FiChevronRight />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Question Navigator */}
//         <div className="glass-card rounded-2xl p-4">
//           <h3 className="font-semibold mb-3">Question Navigator</h3>
//           <div className="grid grid-cols-5 gap-2">
//             {currentQuestions.map((q, idx) => {
//               const isAnswered = userAnswers[q.id];
//               return (
//                 <button
//                   key={q.id}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`p-2 rounded-lg text-sm font-medium transition-all ${
//                     currentIndex === idx
//                       ? "bg-blue-600 text-white"
//                       : isAnswered
//                         ? "bg-green-100 dark:bg-green-900/30 text-green-700"
//                         : "bg-gray-100 dark:bg-gray-800 text-gray-600"
//                   }`}
//                 >
//                   {idx + 1}
//                   {isAnswered && (
//                     <FiCheckCircle size={12} className="inline ml-1" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//           <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex items-center justify-between text-sm">
//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-green-600" />
//                 <span>Answered: {answeredCount}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FiCircle />
//                 <span>
//                   Remaining: {currentQuestions.length - answeredCount}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TakeExam;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useExam } from "../context/ExamContext";
import { useToast } from "../context/ToastContext";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import {
  FiCheckCircle,
  FiCircle,
  FiSend,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const TakeExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const {
    currentExam,
    currentQuestions,
    userAnswers,
    saveAnswer,
    submitExam,
  } = useExam();
  const { addToast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  // ---- LOCK CHECK: redirect if already completed ----
  useEffect(() => {
    const isCompleted = localStorage.getItem(`exam_${examId}_completed`) === "true";
    if (isCompleted) {
      addToast("You have already completed this exam.", "error");
      navigate(`/exam/${examId}/result`);
    }
  }, [examId, navigate, addToast]);

  // ---- Check if exam exists ----
  useEffect(() => {
    if (!currentExam || currentQuestions.length === 0) {
      addToast("Exam not found", "error");
      navigate("/exams");
    }
  }, [currentExam, currentQuestions, navigate, addToast]);

  const handleAnswerSelect = (questionId, answer) => {
    saveAnswer(questionId, answer);
  };

  const handleSubmit = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to submit the exam?",
    );
    if (!confirmed) return;

    setIsSubmitting(true);
    const result = submitExam();
    if (result) {
      // Lock the exam in localStorage
      localStorage.setItem(`exam_${examId}_completed`, "true");
      addToast("Exam submitted successfully!", "success");
      navigate(`/exam/${examId}/result`);
    }
    setIsSubmitting(false);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    addToast("Time is up! Submitting your exam...", "warning");
    setTimeout(() => {
      submitExam();
      localStorage.setItem(`exam_${examId}_completed`, "true");
      navigate(`/exam/${examId}/result`);
    }, 1500);
  };

  const currentQuestion = currentQuestions[currentIndex];
  const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
  const answeredCount = Object.keys(userAnswers).length;

  if (!currentExam || !currentQuestions.length) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse">Loading exam...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header */}
      <div className="glass-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">{currentExam.title}</h2>
          <p className="text-sm text-gray-600">
            Question {currentIndex + 1} of {currentQuestions.length}
          </p>
        </div>
        <Timer
          duration={currentExam.duration}
          onTimeUp={handleTimeUp}
          isActive={!timeUp}
        />
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="btn-primary flex items-center gap-2 disabled:opacity-50"
        >
          <FiSend /> Submit
        </button>
      </div>

      {/* Progress Bar */}
      <div className="glass-card rounded-2xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>
            {answeredCount}/{currentQuestions.length} Answered
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Area */}
        <div className="lg:col-span-3">
          <QuestionCard
            question={currentQuestion}
            index={currentIndex}
            selectedAnswer={userAnswers[currentQuestion.id]}
            onAnswerSelect={handleAnswerSelect}
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              disabled={currentIndex === 0}
              className="btn-secondary flex items-center gap-2 disabled:opacity-50"
            >
              <FiChevronLeft /> Previous
            </button>
            {currentIndex === currentQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="btn-primary flex items-center gap-2"
              >
                Submit <FiSend />
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="btn-primary flex items-center gap-2"
              >
                Next <FiChevronRight />
              </button>
            )}
          </div>
        </div>

        {/* Question Navigator */}
        <div className="glass-card rounded-2xl p-4">
          <h3 className="font-semibold mb-3">Question Navigator</h3>
          <div className="grid grid-cols-5 gap-2">
            {currentQuestions.map((q, idx) => {
              const isAnswered = userAnswers[q.id];
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2 rounded-lg text-sm font-medium transition-all ${
                    currentIndex === idx
                      ? "bg-blue-600 text-white"
                      : isAnswered
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600"
                  }`}
                >
                  {idx + 1}
                  {isAnswered && (
                    <FiCheckCircle size={12} className="inline ml-1" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Answered: {answeredCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCircle />
                <span>
                  Remaining: {currentQuestions.length - answeredCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeExam;