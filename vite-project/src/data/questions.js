// Generate 20 questions for each exam with realistic content
const generateQuestions = (examId, subject, count = 20) => {
  const questions = [];

  const questionTemplates = {
    Mathematics: [
      "What is the derivative of x^2?",
      "Solve for x: 2x + 5 = 15",
      "What is the value of π (pi) approximately?",
      "What is the square root of 144?",
      "If a triangle has angles 45°, 45°, and 90°, what type of triangle is it?",
      "What is 15% of 200?",
      "Simplify: (a + b)(a - b)",
      "What is the area of a circle with radius 5?",
      "What is the probability of rolling a 6 on a fair die?",
      "What is the next number in the sequence: 2, 4, 8, 16, ?",
      "What is the value of log₁₀(100)?",
      "What is the sum of angles in a triangle?",
      "What is the formula for the circumference of a circle?",
      "What is the derivative of sin(x)?",
      "What is the integral of 2x dx?",
      "What is the value of 5! (5 factorial)?",
      "What is the solution to x² - 5x + 6 = 0?",
      "What is the slope of the line y = 3x + 2?",
      "What is 2⁵?",
      "What is the median of the numbers: 3, 7, 9, 12, 15?",
    ],
    Programming: [
      "Which of the following is a programming language?",
      "What does HTML stand for?",
      "Which keyword is used to define a function in Python?",
      "What is the output of 'print(2**3)' in Python?",
      "Which symbol is used for single-line comments in JavaScript?",
      "What does CSS stand for?",
      "Which data structure uses LIFO (Last In First Out)?",
      "What is the time complexity of binary search?",
      "Which of the following is a NoSQL database?",
      "What does API stand for?",
      "Which operator is used for strict equality in JavaScript?",
      "What is the default port for HTTP?",
      "Which of the following is a version control system?",
      "What does SQL stand for?",
      "What is the purpose of the 'this' keyword in JavaScript?",
      "Which of the following is a frontend framework?",
      "What does CRUD stand for?",
      "Which HTTP method is used to retrieve data?",
      "What is the output of typeof null in JavaScript?",
      "What is the primary purpose of React?",
    ],
    Science: [
      "What is the chemical symbol for Gold?",
      "Which planet is known as the Red Planet?",
      "What is the hardest natural substance?",
      "What is the process by which plants make food called?",
      "Which organ pumps blood throughout the human body?",
      "What is the chemical formula for water?",
      "What is the main gas in Earth's atmosphere?",
      "What is the unit of electric current?",
      "What is the fastest animal on land?",
      "What is the study of fossils called?",
      "What is the pH of pure water?",
      "Which scientist developed the theory of relativity?",
      "What is the powerhouse of the cell?",
      "What is the boiling point of water at sea level?",
      "Which element has the symbol 'O'?",
      "What is the force that pulls objects toward Earth?",
      "What is the largest organ in the human body?",
      "What is the study of weather called?",
      "Which vitamin is produced by the skin when exposed to sunlight?",
      "What is the nearest star to Earth?",
    ],
    English: [
      "What is the plural of 'child'?",
      "Which word is a synonym for 'happy'?",
      "Identify the correct spelling:",
      "What is the past tense of 'go'?",
      "Which sentence is grammatically correct?",
      "What is an antonym for 'difficult'?",
      "Identify the adjective in: 'The red car is fast.'",
      "What is the comparative form of 'good'?",
      "Which word means 'a person who writes books'?",
      "What is the opposite of 'ancient'?",
      "Which punctuation mark ends a question?",
      "What is the subject in the sentence: 'John ate an apple'?",
      "What is a group of lions called?",
      "Which word is a noun?",
      "What is the correct article for 'university'?",
      "What does 'beverage' mean?",
      "Which word is a verb?",
      "What is the synonym for 'quick'?",
      "What is the plural of 'mouse'?",
      "Which sentence uses correct capitalization?",
    ],
    History: [
      "Who painted the Mona Lisa?",
      "In which year did World War II end?",
      "Who was the first man to walk on the moon?",
      "Which ancient civilization built the Pyramids?",
      "Who wrote 'The Communist Manifesto'?",
      "What was the name of the ship that Darwin sailed on?",
      "Who discovered penicillin?",
      "Which empire was ruled by Julius Caesar?",
      "What year did the French Revolution begin?",
      "Who was known as the 'Iron Chancellor'?",
      "Which country gifted the Statue of Liberty to the USA?",
      "Who invented the light bulb?",
      "What was the name of the first successful airplane?",
      "Who was the first President of the United States?",
      "Which ancient wonder was at Olympia?",
      "Who wrote the 'Declaration of Independence'?",
      "What year did World War I begin?",
      "Who was the famous nurse during the Crimean War?",
      "Which empire was known as the 'Empire on which the sun never sets'?",
      "Who discovered the Rosetta Stone?",
    ],
  };

  const subjects = {
    1: "Mathematics",
    2: "Programming",
    3: "Science",
    4: "English",
    5: "History",
  };

  const subjectName = subjects[examId];
  const templates =
    questionTemplates[subjectName] || questionTemplates.Mathematics;
  const options = [
    ["A) Option 1", "B) Option 2", "C) Option 3", "D) Option 4"],
    ["A) True", "B) False", "C) Maybe", "D) None"],
    ["A) HTML", "B) CSS", "C) JavaScript", "D) Python"],
    ["A) 8", "B) 6", "C) 9", "D) 12"],
    ["A) //", "B) #", "C) /*", "D) --"],
  ];

  for (let i = 0; i < count; i++) {
    const templateIndex = i % templates.length;
    const correctIndex = (i % 4) + 1; // 1-4 for A-D

    questions.push({
      id: `${examId}_q${i + 1}`,
      text:
        templates[templateIndex] ||
        `Sample question ${i + 1} for ${subjectName}`,
      options: options[i % options.length],
      correct: String.fromCharCode(64 + correctIndex), // 'A', 'B', 'C', 'D'
      explanation: `The correct answer is ${String.fromCharCode(64 + correctIndex)}. This topic is fundamental in ${subjectName}.`,
    });
  }

  return questions;
};

export const getQuestionsByExamId = (examId) => {
  const questionsMap = {
    1: generateQuestions(1, "Mathematics", 20),
    2: generateQuestions(2, "Programming", 20),
    3: generateQuestions(3, "Science", 20),
    4: generateQuestions(4, "English", 20),
    5: generateQuestions(5, "History", 20),
  };
  return questionsMap[examId] || [];
};
