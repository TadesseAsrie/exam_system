# exam_system
# 📚 Online Examination System - Frontend

A modern, fully responsive online examination platform built with React.js, Tailwind CSS, and Context API. Features real-time exam taking, timer, result analysis, dark mode, and complete authentication flow.



## ✨ Features

### 🔐 Authentication
- Login / Register pages with validation
- "Remember me" functionality
- Show/hide password toggle
- Protected routes (simulated JWT)
- LocalStorage persistence

### 📝 Exam Management
- Browse all available exams with search, filter, sort, pagination
- Exam cards show: title, subject, duration, questions count, difficulty
- Exam instructions page with rules and details
- Real-time exam taking with countdown timer
- Question navigation panel with status indicators
- Auto-submit on time expiration

### 📊 Results & Analytics
- Detailed result page with:
  - Total questions, correct/wrong answers
  - Score percentage, pass/fail status
  - Performance progress bar
- Exam history stored locally
- Dashboard with statistics (total exams, completed, average score, recent activity)

### 👤 User Profile
- Profile page with editable information
- Avatar generation (UI Avatars)
- Department and bio fields
- Exam performance statistics

### 🎨 UI/UX
- Glassmorphism design with backdrop blur
- Dark mode toggle (persists in localStorage)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations (fade-in, slide-up)
- Loading skeletons for better UX
- Toast notifications for user actions
- Empty states for no data

### 🛠️ Additional
- Search exams by title/subject
- Filter by subject and difficulty
- Sort by duration or title
- Pagination (6 items per page)
- Sidebar navigation with collapsible menu

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI library (functional components) |
| React Router DOM 6 | Client-side routing |
| Tailwind CSS 3 | Styling & responsive design |
| React Icons | Icon library |
| Context API | State management (Auth, Exam, Toast) |
| LocalStorage | Persistent storage (users, exam history) |
| Vite | Build tool & dev server |
