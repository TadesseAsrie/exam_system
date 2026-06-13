

export const questionsData = {
  1: [ // Mathematics
    {
      id: "1_q1",
      text: "What is the derivative of x²?",
      options: ["A) x", "B) 2x", "C) x²", "D) 2x²"],
      correct: "B",
      explanation: "The power rule: d/dx (xⁿ) = n·xⁿ⁻¹, so derivative of x² is 2x."
    },
    {
      id: "1_q2",
      text: "Solve for x: 2x + 5 = 15",
      options: ["A) 5", "B) 10", "C) 7.5", "D) 3"],
      correct: "A",
      explanation: "Subtract 5: 2x = 10 → x = 5."
    },
    {
      id: "1_q3",
      text: "What is the value of π (pi) approximately?",
      options: ["A) 3.14", "B) 3.41", "C) 2.71", "D) 1.62"],
      correct: "A",
      explanation: "Pi is approximately 3.14159..."
    },
    {
      id: "1_q4",
      text: "What is the square root of 144?",
      options: ["A) 10", "B) 11", "C) 12", "D) 13"],
      correct: "C",
      explanation: "12 × 12 = 144."
    },
    {
      id: "1_q5",
      text: "If a triangle has angles 45°, 45°, and 90°, what type of triangle is it?",
      options: ["A) Equilateral", "B) Isosceles right", "C) Scalene", "D) Obtuse"],
      correct: "B",
      explanation: "Two equal angles → isosceles; one right angle → right triangle."
    },
    {
      id: "1_q6",
      text: "What is 15% of 200?",
      options: ["A) 15", "B) 20", "C) 25", "D) 30"],
      correct: "D",
      explanation: "15/100 × 200 = 30."
    },
    {
      id: "1_q7",
      text: "Simplify: (a + b)(a – b)",
      options: ["A) a² + b²", "B) a² – b²", "C) a² + 2ab + b²", "D) a² – 2ab + b²"],
      correct: "B",
      explanation: "Difference of squares formula."
    },
    {
      id: "1_q8",
      text: "What is the area of a circle with radius 5?",
      options: ["A) 25π", "B) 10π", "C) 5π", "D) 20π"],
      correct: "A",
      explanation: "Area = πr² = π×25 = 25π."
    },
    {
      id: "1_q9",
      text: "What is the probability of rolling a 6 on a fair die?",
      options: ["A) 1/2", "B) 1/3", "C) 1/6", "D) 1/4"],
      correct: "C",
      explanation: "One favourable outcome out of six."
    },
    {
      id: "1_q10",
      text: "What is the next number in the sequence: 2, 4, 8, 16, ?",
      options: ["A) 24", "B) 32", "C) 36", "D) 48"],
      correct: "B",
      explanation: "Each term doubles the previous: 16 × 2 = 32."
    },
    {
      id: "1_q11",
      text: "What is the value of log₁₀(100)?",
      options: ["A) 1", "B) 2", "C) 10", "D) 100"],
      correct: "B",
      explanation: "10² = 100, so log₁₀(100) = 2."
    },
    {
      id: "1_q12",
      text: "What is the sum of angles in a triangle?",
      options: ["A) 90°", "B) 180°", "C) 270°", "D) 360°"],
      correct: "B",
      explanation: "Interior angles always sum to 180°."
    },
    {
      id: "1_q13",
      text: "What is the formula for the circumference of a circle?",
      options: ["A) πr²", "B) 2πr", "C) πd²", "D) πr"],
      correct: "B",
      explanation: "Circumference = 2πr."
    },
    {
      id: "1_q14",
      text: "What is the derivative of sin(x)?",
      options: ["A) cos(x)", "B) –cos(x)", "C) sin(x)", "D) –sin(x)"],
      correct: "A",
      explanation: "d/dx sin(x) = cos(x)."
    },
    {
      id: "1_q15",
      text: "What is the integral of 2x dx?",
      options: ["A) x² + C", "B) 2x² + C", "C) x²/2 + C", "D) 2 + C"],
      correct: "A",
      explanation: "∫2x dx = x² + C."
    },
    {
      id: "1_q16",
      text: "What is the value of 5! (5 factorial)?",
      options: ["A) 60", "B) 120", "C) 24", "D) 720"],
      correct: "B",
      explanation: "5! = 5×4×3×2×1 = 120."
    },
    {
      id: "1_q17",
      text: "What is the solution to x² – 5x + 6 = 0?",
      options: ["A) x = 2, 3", "B) x = –2, –3", "C) x = 1, 6", "D) x = –1, –6"],
      correct: "A",
      explanation: "Factors as (x–2)(x–3)=0 → x=2,3."
    },
    {
      id: "1_q18",
      text: "What is the slope of the line y = 3x + 2?",
      options: ["A) 2", "B) 3", "C) 1", "D) –3"],
      correct: "B",
      explanation: "y = mx + b, slope m = 3."
    },
    {
      id: "1_q19",
      text: "What is 2⁵?",
      options: ["A) 8", "B) 16", "C) 32", "D) 64"],
      correct: "C",
      explanation: "2⁵ = 2×2×2×2×2 = 32."
    },
    {
      id: "1_q20",
      text: "What is the median of the numbers: 3, 7, 9, 12, 15?",
      options: ["A) 7", "B) 9", "C) 12", "D) 3"],
      correct: "B",
      explanation: "The middle value when sorted is 9."
    }
  ],
  2: [ // Programming
    {
      id: "2_q1",
      text: "Which of the following is a programming language?",
      options: ["A) HTML", "B) CSS", "C) JavaScript", "D) XML"],
      correct: "C",
      explanation: "JavaScript is a programming language; HTML/CSS are markup/styling."
    },
    {
      id: "2_q2",
      text: "What does HTML stand for?",
      options: ["A) Hyper Text Markup Language", "B) High Tech Modern Language", "C) Hyper Transfer Markup Language", "D) Home Tool Markup Language"],
      correct: "A",
      explanation: "Hyper Text Markup Language – standard for web pages."
    },
    {
      id: "2_q3",
      text: "Which keyword is used to define a function in Python?",
      options: ["A) func", "B) define", "C) def", "D) function"],
      correct: "C",
      explanation: "Python uses the `def` keyword."
    },
    {
      id: "2_q4",
      text: "What is the output of 'print(2**3)' in Python?",
      options: ["A) 6", "B) 8", "C) 9", "D) 5"],
      correct: "B",
      explanation: "`**` is exponentiation: 2³ = 8."
    },
    {
      id: "2_q5",
      text: "Which symbol is used for single-line comments in JavaScript?",
      options: ["A) //", "B) #", "C) /*", "D) --"],
      correct: "A",
      explanation: "JavaScript uses `//` for single-line comments."
    },
    {
      id: "2_q6",
      text: "What does CSS stand for?",
      options: ["A) Computer Style Sheets", "B) Creative Style Sheets", "C) Cascading Style Sheets", "D) Colorful Style Sheets"],
      correct: "C",
      explanation: "Cascading Style Sheets – controls presentation."
    },
    {
      id: "2_q7",
      text: "Which data structure uses LIFO (Last In First Out)?",
      options: ["A) Queue", "B) Stack", "C) Array", "D) Linked List"],
      correct: "B",
      explanation: "Stack – last element added is first removed."
    },
    {
      id: "2_q8",
      text: "What is the time complexity of binary search?",
      options: ["A) O(n)", "B) O(log n)", "C) O(n log n)", "D) O(n²)"],
      correct: "B",
      explanation: "Binary search divides search space in half each step."
    },
    {
      id: "2_q9",
      text: "Which of the following is a NoSQL database?",
      options: ["A) MySQL", "B) PostgreSQL", "C) MongoDB", "D) SQLite"],
      correct: "C",
      explanation: "MongoDB is a document-oriented NoSQL database."
    },
    {
      id: "2_q10",
      text: "What does API stand for?",
      options: ["A) Application Programming Interface", "B) Advanced Programming Integration", "C) Application Protocol Interface", "D) Automated Program Interface"],
      correct: "A",
      explanation: "Application Programming Interface – allows software to interact."
    },
    {
      id: "2_q11",
      text: "Which operator is used for strict equality in JavaScript?",
      options: ["A) ==", "B) =", "C) ===", "D) !=="],
      correct: "C",
      explanation: "`===` compares both value and type without type coercion."
    },
    {
      id: "2_q12",
      text: "What is the default port for HTTP?",
      options: ["A) 80", "B) 443", "C) 8080", "D) 22"],
      correct: "A",
      explanation: "HTTP uses port 80 by default."
    },
    {
      id: "2_q13",
      text: "Which of the following is a version control system?",
      options: ["A) Docker", "B) Jenkins", "C) Git", "D) Maven"],
      correct: "C",
      explanation: "Git is a distributed version control system."
    },
    {
      id: "2_q14",
      text: "What does SQL stand for?",
      options: ["A) Structured Query Language", "B) Simple Query Language", "C) Sequential Query Language", "D) System Query Language"],
      correct: "A",
      explanation: "Structured Query Language for managing relational databases."
    },
    {
      id: "2_q15",
      text: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["A) Refers to current function", "B) Refers to the global object", "C) Refers to the object that owns the method", "D) Refers to the parent object"],
      correct: "C",
      explanation: "'this' refers to the execution context – usually the object calling the method."
    },
    {
      id: "2_q16",
      text: "Which of the following is a frontend framework?",
      options: ["A) Django", "B) Flask", "C) React", "D) Spring Boot"],
      correct: "C",
      explanation: "React is a frontend library for building user interfaces."
    },
    {
      id: "2_q17",
      text: "What does CRUD stand for?",
      options: ["A) Create, Read, Update, Delete", "B) Code, Run, Update, Deploy", "C) Connect, Retrieve, Use, Display", "D) Create, Reload, Undo, Drop"],
      correct: "A",
      explanation: "CRUD describes basic database operations."
    },
    {
      id: "2_q18",
      text: "Which HTTP method is used to retrieve data?",
      options: ["A) POST", "B) PUT", "C) DELETE", "D) GET"],
      correct: "D",
      explanation: "GET requests data from a specified resource."
    },
    {
      id: "2_q19",
      text: "What is the output of typeof null in JavaScript?",
      options: ["A) 'null'", "B) 'undefined'", "C) 'object'", "D) 'number'"],
      correct: "C",
      explanation: "A historical bug: typeof null returns 'object'."
    },
    {
      id: "2_q20",
      text: "What is the primary purpose of React?",
      options: ["A) Server-side rendering", "B) Building interactive UIs", "C) Managing databases", "D) Styling web pages"],
      correct: "B",
      explanation: "React is for building component-based user interfaces."
    }
  ],
  3: [ // Science
    {
      id: "3_q1",
      text: "What is the chemical symbol for Gold?",
      options: ["A) Go", "B) Gd", "C) Au", "D) Ag"],
      correct: "C",
      explanation: "Au from Latin 'aurum'."
    },
    {
      id: "3_q2",
      text: "Which planet is known as the Red Planet?",
      options: ["A) Jupiter", "B) Mars", "C) Venus", "D) Saturn"],
      correct: "B",
      explanation: "Mars appears reddish due to iron oxide (rust) on its surface."
    },
    {
      id: "3_q3",
      text: "What is the hardest natural substance?",
      options: ["A) Iron", "B) Diamond", "C) Platinum", "D) Tungsten"],
      correct: "B",
      explanation: "Diamond is the hardest known natural material."
    },
    {
      id: "3_q4",
      text: "What is the process by which plants make food called?",
      options: ["A) Respiration", "B) Fermentation", "C) Photosynthesis", "D) Transpiration"],
      correct: "C",
      explanation: "Photosynthesis converts sunlight, CO₂, and water into glucose."
    },
    {
      id: "3_q5",
      text: "Which organ pumps blood throughout the human body?",
      options: ["A) Brain", "B) Liver", "C) Heart", "D) Lungs"],
      correct: "C",
      explanation: "The heart is the muscular pump of the circulatory system."
    },
    {
      id: "3_q6",
      text: "What is the chemical formula for water?",
      options: ["A) CO₂", "B) O₂", "C) H₂O", "D) NaCl"],
      correct: "C",
      explanation: "Water is H₂O (two hydrogen atoms, one oxygen)."
    },
    {
      id: "3_q7",
      text: "What is the main gas in Earth's atmosphere?",
      options: ["A) Oxygen", "B) Carbon dioxide", "C) Argon", "D) Nitrogen"],
      correct: "D",
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
    },
    {
      id: "3_q8",
      text: "What is the unit of electric current?",
      options: ["A) Volt", "B) Ohm", "C) Ampere", "D) Watt"],
      correct: "C",
      explanation: "Ampere (A) measures electric current."
    },
    {
      id: "3_q9",
      text: "What is the fastest animal on land?",
      options: ["A) Lion", "B) Cheetah", "C) Leopard", "D) Horse"],
      correct: "B",
      explanation: "Cheetah can reach speeds up to 120 km/h (75 mph)."
    },
    {
      id: "3_q10",
      text: "What is the study of fossils called?",
      options: ["A) Archaeology", "B) Paleontology", "C) Geology", "D) Anthropology"],
      correct: "B",
      explanation: "Paleontology is the study of ancient life through fossils."
    },
    {
      id: "3_q11",
      text: "What is the pH of pure water?",
      options: ["A) 0", "B) 5", "C) 7", "D) 14"],
      correct: "C",
      explanation: "Pure water has a neutral pH of 7."
    },
    {
      id: "3_q12",
      text: "Which scientist developed the theory of relativity?",
      options: ["A) Isaac Newton", "B) Galileo Galilei", "C) Albert Einstein", "D) Niels Bohr"],
      correct: "C",
      explanation: "Albert Einstein proposed special (1905) and general (1915) relativity."
    },
    {
      id: "3_q13",
      text: "What is the powerhouse of the cell?",
      options: ["A) Nucleus", "B) Ribosome", "C) Mitochondria", "D) Chloroplast"],
      correct: "C",
      explanation: "Mitochondria generate most of the cell's ATP (energy)."
    },
    {
      id: "3_q14",
      text: "What is the boiling point of water at sea level?",
      options: ["A) 90°C", "B) 100°C", "C) 110°C", "D) 80°C"],
      correct: "B",
      explanation: "Water boils at 100°C (212°F) at standard atmospheric pressure."
    },
    {
      id: "3_q15",
      text: "Which element has the symbol 'O'?",
      options: ["A) Gold", "B) Oxygen", "C) Osmium", "D) Hydrogen"],
      correct: "B",
      explanation: "O is the symbol for Oxygen."
    },
    {
      id: "3_q16",
      text: "What is the force that pulls objects toward Earth?",
      options: ["A) Magnetism", "B) Friction", "C) Gravity", "D) Tension"],
      correct: "C",
      explanation: "Gravity is the attractive force between masses."
    },
    {
      id: "3_q17",
      text: "What is the largest organ in the human body?",
      options: ["A) Liver", "B) Heart", "C) Brain", "D) Skin"],
      correct: "D",
      explanation: "The skin is the largest organ by surface area and weight."
    },
    {
      id: "3_q18",
      text: "What is the study of weather called?",
      options: ["A) Climatology", "B) Meteorology", "C) Geology", "D) Astronomy"],
      correct: "B",
      explanation: "Meteorology focuses on atmospheric phenomena and weather forecasting."
    },
    {
      id: "3_q19",
      text: "Which vitamin is produced by the skin when exposed to sunlight?",
      options: ["A) Vitamin A", "B) Vitamin B12", "C) Vitamin C", "D) Vitamin D"],
      correct: "D",
      explanation: "UVB sunlight converts cholesterol in skin to Vitamin D."
    },
    {
      id: "3_q20",
      text: "What is the nearest star to Earth (other than the Sun)?",
      options: ["A) Alpha Centauri", "B) Proxima Centauri", "C) Sirius", "D) Betelgeuse"],
      correct: "B",
      explanation: "Proxima Centauri is about 4.24 light-years away."
    }
  ],
  4: [ // English
    {
      id: "4_q1",
      text: "What is the plural of 'child'?",
      options: ["A) Childs", "B) Childes", "C) Children", "D) Childrens"],
      correct: "C",
      explanation: "Irregular plural: child → children."
    },
    {
      id: "4_q2",
      text: "Which word is a synonym for 'happy'?",
      options: ["A) Sad", "B) Joyful", "C) Angry", "D) Tired"],
      correct: "B",
      explanation: "Joyful means feeling, expressing, or causing great pleasure and happiness."
    },
    {
      id: "4_q3",
      text: "Identify the correct spelling:",
      options: ["A) Recieve", "B) Receive", "C) Receeve", "D) Reseive"],
      correct: "B",
      explanation: "The correct spelling is 'receive' (i before e except after c)."
    },
    {
      id: "4_q4",
      text: "What is the past tense of 'go'?",
      options: ["A) Goed", "B) Went", "C) Gone", "D) Goes"],
      correct: "B",
      explanation: "'Went' is the simple past tense of 'go'."
    },
    {
      id: "4_q5",
      text: "Which sentence is grammatically correct?",
      options: ["A) He don't like pizza.", "B) He doesn't like pizza.", "C) He doesn't likes pizza.", "D) He not like pizza."],
      correct: "B",
      explanation: "Third person singular requires 'doesn't' + base verb."
    },
    {
      id: "4_q6",
      text: "What is an antonym for 'difficult'?",
      options: ["A) Hard", "B) Easy", "C) Complex", "D) Challenging"],
      correct: "B",
      explanation: "Antonym means opposite; easy is opposite of difficult."
    },
    {
      id: "4_q7",
      text: "Identify the adjective in: 'The red car is fast.'",
      options: ["A) red", "B) car", "C) is", "D) fast"],
      correct: "A",
      explanation: "'Red' describes the car; 'fast' is also an adjective, but red is the first adjective modifying 'car'."
    },
    {
      id: "4_q8",
      text: "What is the comparative form of 'good'?",
      options: ["A) Gooder", "B) Better", "C) Best", "D) More good"],
      correct: "B",
      explanation: "Irregular comparison: good → better → best."
    },
    {
      id: "4_q9",
      text: "Which word means 'a person who writes books'?",
      options: ["A) Author", "B) Editor", "C) Publisher", "D) Reader"],
      correct: "A",
      explanation: "An author writes books or other literary works."
    },
    {
      id: "4_q10",
      text: "What is the opposite of 'ancient'?",
      options: ["A) Old", "B) Antique", "C) Modern", "D) Historic"],
      correct: "C",
      explanation: "Ancient means very old; modern means current or recent."
    },
    {
      id: "4_q11",
      text: "Which punctuation mark ends a question?",
      options: ["A) Period", "B) Exclamation mark", "C) Question mark", "D) Comma"],
      correct: "C",
      explanation: "A question mark (?) is used at the end of an interrogative sentence."
    },
    {
      id: "4_q12",
      text: "What is the subject in the sentence: 'John ate an apple.'?",
      options: ["A) ate", "B) an apple", "C) John", "D) apple"],
      correct: "C",
      explanation: "The subject is the person performing the action: John."
    },
    {
      id: "4_q13",
      text: "What is a group of lions called?",
      options: ["A) Herd", "B) Pack", "C) Pride", "D) Flock"],
      correct: "C",
      explanation: "A group of lions is a pride."
    },
    {
      id: "4_q14",
      text: "Which word is a noun?",
      options: ["A) Run", "B) Beautiful", "C) Slowly", "D) Table"],
      correct: "D",
      explanation: "'Table' is a noun (person, place, thing, or idea)."
    },
    {
      id: "4_q15",
      text: "What is the correct article for 'university'?",
      options: ["A) a", "B) an", "C) the", "D) (no article)"],
      correct: "A",
      explanation: "Though 'u' is a vowel, its sound is /juː/ (consonant sound), so 'a university'."
    },
    {
      id: "4_q16",
      text: "What does 'beverage' mean?",
      options: ["A) Food", "B) Drink", "C) Snack", "D) Meal"],
      correct: "B",
      explanation: "A beverage is any drinkable liquid."
    },
    {
      id: "4_q17",
      text: "Which word is a verb?",
      options: ["A) Quickly", "B) House", "C) Jump", "D) Red"],
      correct: "C",
      explanation: "'Jump' is an action verb."
    },
    {
      id: "4_q18",
      text: "What is the synonym for 'quick'?",
      options: ["A) Slow", "B) Fast", "C) Lazy", "D) Dull"],
      correct: "B",
      explanation: "Quick and fast both mean moving or capable of moving at high speed."
    },
    {
      id: "4_q19",
      text: "What is the plural of 'mouse'?",
      options: ["A) Mouses", "B) Mice", "C) Mices", "D) Mouse"],
      correct: "B",
      explanation: "Irregular plural: mouse → mice."
    },
    {
      id: "4_q20",
      text: "Which sentence uses correct capitalization?",
      options: ["A) i live in New York.", "B) I live in new york.", "C) I live in New York.", "D) i Live in New York."],
      correct: "C",
      explanation: "Pronoun 'I' and proper noun 'New York' are capitalized."
    }
  ],
  5: [ // History
    {
      id: "5_q1",
      text: "Who painted the Mona Lisa?",
      options: ["A) Vincent van Gogh", "B) Pablo Picasso", "C) Leonardo da Vinci", "D) Michelangelo"],
      correct: "C",
      explanation: "Leonardo da Vinci painted the Mona Lisa in the early 1500s."
    },
    {
      id: "5_q2",
      text: "In which year did World War II end?",
      options: ["A) 1943", "B) 1944", "C) 1945", "D) 1946"],
      correct: "C",
      explanation: "WWII ended in 1945 (V-E Day May 8, V-J Day August 15)."
    },
    {
      id: "5_q3",
      text: "Who was the first man to walk on the moon?",
      options: ["A) Buzz Aldrin", "B) Neil Armstrong", "C) Michael Collins", "D) Yuri Gagarin"],
      correct: "B",
      explanation: "Neil Armstrong stepped onto the lunar surface on July 20, 1969."
    },
    {
      id: "5_q4",
      text: "Which ancient civilization built the Pyramids?",
      options: ["A) Romans", "B) Greeks", "C) Mesopotamians", "D) Egyptians"],
      correct: "D",
      explanation: "The ancient Egyptians built the pyramids as tombs for pharaohs."
    },
    {
      id: "5_q5",
      text: "Who wrote 'The Communist Manifesto'?",
      options: ["A) Vladimir Lenin", "B) Karl Marx and Friedrich Engels", "C) Joseph Stalin", "D) Leon Trotsky"],
      correct: "B",
      explanation: "Marx and Engels published it in 1848."
    },
    {
      id: "5_q6",
      text: "What was the name of the ship that Darwin sailed on?",
      options: ["A) HMS Beagle", "B) HMS Endeavour", "C) Santa Maria", "D) Mayflower"],
      correct: "A",
      explanation: "Charles Darwin's voyage on HMS Beagle (1831–1836) shaped his theory of evolution."
    },
    {
      id: "5_q7",
      text: "Who discovered penicillin?",
      options: ["A) Louis Pasteur", "B) Alexander Fleming", "C) Marie Curie", "D) Robert Koch"],
      correct: "B",
      explanation: "Alexander Fleming discovered penicillin in 1928."
    },
    {
      id: "5_q8",
      text: "Which empire was ruled by Julius Caesar?",
      options: ["A) Greek Empire", "B) Persian Empire", "C) Roman Empire", "D) Ottoman Empire"],
      correct: "C",
      explanation: "Julius Caesar was a Roman general and dictator of the Roman Republic (later Empire)."
    },
    {
      id: "5_q9",
      text: "What year did the French Revolution begin?",
      options: ["A) 1776", "B) 1789", "C) 1799", "D) 1804"],
      correct: "B",
      explanation: "The French Revolution began in 1789 with the storming of the Bastille."
    },
    {
      id: "5_q10",
      text: "Who was known as the 'Iron Chancellor'?",
      options: ["A) Napoleon Bonaparte", "B) Winston Churchill", "C) Otto von Bismarck", "D) George Washington"],
      correct: "C",
      explanation: "Bismarck, first Chancellor of Germany, earned the nickname for his realpolitik."
    },
    {
      id: "5_q11",
      text: "Which country gifted the Statue of Liberty to the USA?",
      options: ["A) England", "B) Spain", "C) Germany", "D) France"],
      correct: "D",
      explanation: "France gifted the Statue of Liberty in 1886 as a symbol of friendship."
    },
    {
      id: "5_q12",
      text: "Who invented the light bulb?",
      options: ["A) Nikola Tesla", "B) Thomas Edison", "C) Benjamin Franklin", "D) James Watt"],
      correct: "B",
      explanation: "Thomas Edison developed the first practical incandescent light bulb (1879)."
    },
    {
      id: "5_q13",
      text: "What was the name of the first successful airplane?",
      options: ["A) Spirit of St. Louis", "B) Wright Flyer", "C) Concorde", "D) Boeing 707"],
      correct: "B",
      explanation: "The Wright brothers' Wright Flyer made the first powered flight in 1903."
    },
    {
      id: "5_q14",
      text: "Who was the first President of the United States?",
      options: ["A) Thomas Jefferson", "B) John Adams", "C) George Washington", "D) Benjamin Franklin"],
      correct: "C",
      explanation: "George Washington was inaugurated in 1789."
    },
    {
      id: "5_q15",
      text: "Which ancient wonder was at Olympia?",
      options: ["A) Colossus of Rhodes", "B) Statue of Zeus", "C) Temple of Artemis", "D) Hanging Gardens"],
      correct: "B",
      explanation: "The Statue of Zeus at Olympia was one of the Seven Wonders."
    },
    {
      id: "5_q16",
      text: "Who wrote the 'Declaration of Independence'?",
      options: ["A) George Washington", "B) Benjamin Franklin", "C) Thomas Jefferson", "D) John Hancock"],
      correct: "C",
      explanation: "Thomas Jefferson was the principal author."
    },
    {
      id: "5_q17",
      text: "What year did World War I begin?",
      options: ["A) 1912", "B) 1914", "C) 1916", "D) 1918"],
      correct: "B",
      explanation: "WWI began in 1914 after the assassination of Archduke Franz Ferdinand."
    },
    {
      id: "5_q18",
      text: "Who was the famous nurse during the Crimean War?",
      options: ["A) Clara Barton", "B) Florence Nightingale", "C) Mother Teresa", "D) Mary Seacole"],
      correct: "B",
      explanation: "Florence Nightingale became known as 'The Lady with the Lamp'."
    },
    {
      id: "5_q19",
      text: "Which empire was known as the 'Empire on which the sun never sets'?",
      options: ["A) Roman Empire", "B) Mongol Empire", "C) British Empire", "D) Spanish Empire"],
      correct: "C",
      explanation: "The British Empire had territories across the globe such that it was always daylight somewhere."
    },
    {
      id: "5_q20",
      text: "Who discovered the Rosetta Stone?",
      options: ["A) Jean-François Champollion", "B) Napoleon Bonaparte", "C) Pierre Bouchard", "D) Howard Carter"],
      correct: "C",
      explanation: "French soldier Pierre Bouchard found it in 1799 during Napoleon's Egyptian campaign."
    }
  ]
};

export const getQuestionsByExamId = (examId) => {
  return questionsData[examId] || [];
};