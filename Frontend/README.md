# 🚀 Algo Coding Platform

**Algo Coding Platform** is a full-stack coding practice platform designed to help developers and students improve their **Data Structures and Algorithms (DSA)** and problem-solving skills.

The platform provides an interactive coding environment where users can read problems, write code, run test cases, submit solutions, receive a verdict, track solved problems, and get AI-powered assistance.

The main goal of this project is to provide a complete coding-practice experience in one platform.

---

## 📌 Project Overview

Algo Coding Platform follows a simple workflow:

```text
Choose Problem
      ↓
Read Description
      ↓
Write Code
      ↓
Run Code
      ↓
Check Test Cases
      ↓
Submit Solution
      ↓
Judge Code
      ↓
Accepted / Wrong Answer
      ↓
Track Progress
```

When a solution is successfully accepted, the platform provides an interactive celebration experience to make problem solving more engaging.

---

## ✨ Features

### 👨‍💻 Interactive Coding Environment

Users can write solutions directly inside the platform using an integrated code editor.

The platform supports multiple programming languages:

* JavaScript
* Java
* C++

---

### 🧪 Run Code

Users can run their code against test cases before submitting.

The platform displays information such as:

* Test case input
* Expected output
* Actual output
* Test case status
* Runtime
* Memory usage

This allows users to debug their solutions before submitting.

---

### 🚀 Submit Solution

Users can submit their solutions for evaluation.

The submitted code is processed by the coding judge and the platform provides a result such as:

* Accepted
* Wrong Answer
* Runtime Error
* Compilation Error
* Other execution errors

---

### 🎯 Difficulty Levels

Problems are organized according to difficulty:

* 🟢 Easy
* 🟠 Medium
* 🔴 Hard

This allows users to gradually improve their problem-solving skills.

---

### 🏷️ Problem Tags

Problems can be categorized using different DSA topics such as:

* Array
* Linked List
* Graph
* Dynamic Programming
* and other algorithmic topics

Tags help users practice a specific topic.

---

### 🔍 Problem Search and Filtering

Users can quickly find problems using:

* Problem name
* Difficulty
* Tags
* Solved status

Users can also filter problems based on whether they have already solved them.

---

### 📊 Progress Tracking

The homepage displays the user's solving progress.

For example:

```text
Solved: 15 / 50

Progress: ███████░░░░░░░ 30%
```

This helps users understand their current progress and encourages consistent practice.

---

### ✅ Solved Problems

After successfully submitting a problem, it is marked as solved for the user.

Solved problems are displayed separately so users can easily track their achievements.

---

### 🎉 Accepted Submission Celebration

When all required test cases pass successfully, the platform provides an interactive celebration animation.

The project uses **canvas-confetti** to create a more engaging experience after an accepted submission.

The flow is:

```text
Submit Code
     ↓
Judge Code
     ↓
All Test Cases Passed
     ↓
Accepted
     ↓
🎉 Celebration
     ↓
Problem Marked as Solved
```

---

### 🤖 AI Assistance

The platform includes an AI-powered assistant to help users while solving problems.

The AI feature can be used to help users:

* Understand a problem
* Analyze the approach
* Get hints
* Understand concepts
* Improve problem-solving skills

The AI is designed as an assistance tool rather than simply giving users the complete solution.

---

### 🔐 Authentication and Authorization

The platform provides secure user authentication.

Users can:

* Create an account
* Log in
* Access their personalized problems and progress
* Log out

Authentication is implemented using **JWT-based authentication**.

The platform also supports role-based access.

---

### ⚙️ Admin Panel

Administrators can manage coding problems through the admin functionality.

Admin functionality includes managing:

* Problems
* Problem descriptions
* Difficulty
* Tags
* Test cases
* Starter code
* Reference solutions

This makes it easier to maintain and expand the coding problem database.

---

### 🖥️ Modern Developer UI

The platform uses a modern developer-focused design inspired by coding terminals and development environments.

The UI includes:

* Dark theme
* Terminal-style elements
* Animated backgrounds
* Interactive cards
* Progress animations
* Code editor
* Responsive design
* Submission animations
* Success celebrations

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Redux
* Tailwind CSS
* DaisyUI
* Monaco Editor
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## Authentication

* JWT

## Code Execution

* Judge0

## AI

* LLM

## API Testing

* Postman

## Deployment

* AWS

## Other Libraries / Tools

* Axios
* React Router
* React Hook Form
* canvas-confetti
* Git
* GitHub

---

# 🏗️ System Architecture

The platform follows a client-server architecture.

```text
                  ┌─────────────────────┐
                  │       User          │
                  └──────────┬──────────┘
                             │
                             ↓
                  ┌─────────────────────┐
                  │   React Frontend    │
                  │                     │
                  │ • UI                │
                  │ • Code Editor       │
                  │ • Redux             │
                  │ • Problem Pages     │
                  └──────────┬──────────┘
                             │
                          REST API
                             │
                             ↓
                  ┌─────────────────────┐
                  │   Node + Express    │
                  │      Backend        │
                  │                     │
                  │ • Authentication    │
                  │ • Problems          │
                  │ • Submissions       │
                  │ • Admin             │
                  └──────┬───────┬──────┘
                         │       │
              ┌──────────┘       └──────────┐
              ↓                             ↓
      ┌────────────────┐           ┌────────────────┐
      │    MongoDB     │           │     Judge0     │
      │                │           │                │
      │ Users          │           │ Code Execution │
      │ Problems       │           │ Test Cases     │
      │ Submissions    │           │ Verdict        │
      └────────────────┘           └────────────────┘
                         │
                         ↓
                  ┌────────────────┐
                  │      LLM       │
                  │  AI Assistance │
                  └────────────────┘
```

---

# 🔄 How the Platform Works

## 1. User Authentication

The user creates an account or logs into an existing account.

The backend verifies the user's credentials and provides authentication using JWT.

---

## 2. Problem Selection

After logging in, the user can browse available coding problems.

The homepage displays:

* Problem title
* Difficulty
* Tags
* Solved status
* Overall progress

---

## 3. Open a Problem

When a user selects a problem, the problem page displays:

* Problem description
* Examples
* Input
* Output
* Explanation
* Editorial
* Solutions
* Submission history
* AI assistant

---

## 4. Write Code

The user writes the solution inside the integrated Monaco code editor.

The user can select the preferred programming language.

```text
JavaScript
Java
C++
```

---

## 5. Run Code

The user clicks **Run**.

The frontend sends the code to the backend:

```text
React
 ↓
Express API
 ↓
Judge0
 ↓
Code Execution
 ↓
Result
 ↓
React UI
```

The result is displayed in the Testcase section.

---

## 6. Submit Code

When the user is confident about the solution, they click **Submit**.

The backend evaluates the submission.

If all required test cases pass:

```text
accepted = true
```

The platform displays:

```text
🎉 Accepted
```

and triggers the celebration animation.

---

## 7. Track Progress

After successfully solving a problem, the user's solved problem information is updated.

The homepage can then show the updated progress.

For example:

```text
Before:

Solved: 9 / 50

After:

Solved: 10 / 50
```

---

# 🤖 AI Assistant

The platform includes an AI assistant to make problem solving more interactive.

Users can interact with the AI while working on a problem.

The assistant can help with:

```text
Problem Understanding
        ↓
Approach
        ↓
Hint
        ↓
Algorithm
        ↓
Complexity
```

The purpose is to help users learn rather than simply copy solutions.

---

# 👨‍💼 Admin Workflow

Administrators have additional functionality for managing the coding platform.

The general workflow is:

```text
Admin Login
     ↓
Admin Panel
     ↓
Create / Update Problem
     ↓
Add Description
     ↓
Add Test Cases
     ↓
Add Starter Code
     ↓
Add Reference Solution
     ↓
Publish Problem
```

This allows the platform to grow with more coding problems.

---

# 🔐 Security

The platform uses authentication and authorization mechanisms to protect user data and restricted functionality.

Security-related features include:

* JWT-based authentication
* Protected routes
* Role-based authorization
* Backend API validation
* Environment variables for sensitive configuration
* Secure password handling

Sensitive information such as API keys, database credentials, and authentication secrets should be stored in environment variables.

---

# 📱 Responsive Design

The platform is designed to work across different screen sizes.

Supported interfaces include:

* Desktop
* Laptop
* Tablet
* Mobile

The coding interface is optimized primarily for larger screens because of the integrated code editor.

---

# 📂 Main Application Modules

The project can be understood through the following modules:

```text
Authentication
     ↓
Problem Management
     ↓
Problem Solving
     ↓
Code Execution
     ↓
Code Submission
     ↓
Result Evaluation
     ↓
Progress Tracking
     ↓
AI Assistance
     ↓
Admin Management
```

---

# 🔌 API Workflow

The frontend communicates with the backend through REST APIs.

Examples of application operations include:

```text
GET     Problems
GET     Problem by ID

POST    Run Code
POST    Submit Code

GET     Solved Problems

POST    Login
POST    Register

Admin   Create Problem
Admin   Update Problem
Admin   Delete Problem
```

The exact API routes depend on the backend implementation.

---

# 🧪 Testing

Postman was used during development to test backend APIs.

The APIs can be tested for:

* Authentication
* Problem retrieval
* Problem creation
* Code execution
* Code submission
* User submissions
* Admin operations

Testing the APIs separately helped verify the backend before integrating it with the frontend.

---

# ⚙️ Environment Variables

Sensitive configuration should be stored inside a `.env` file.

Example:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JUDGE0_API_KEY=your_judge0_api_key

LLM_API_KEY=your_llm_api_key
```

Instead, create an example file:

```text
.env.example
```

and add placeholder values.

---

# 🚀 Installation and Setup

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd Algo-Coding-Platform
```

---

## 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

Create a `.env` file and add your backend configuration.

Then start the backend:

```bash
npm run dev
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd Frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

---

## 4. Open the Application

After starting the frontend, open the local development URL provided by Vite.

Usually:

```text
http://localhost:5173
```

The backend runs separately according to your configured port.

---

# 🧑‍💻 User Flow

A typical user journey looks like this:

```text
Register / Login
       ↓
Homepage
       ↓
Browse Problems
       ↓
Filter / Search
       ↓
Select Problem
       ↓
Read Description
       ↓
Write Code
       ↓
Run Code
       ↓
Check Test Cases
       ↓
Submit
       ↓
Accepted
       ↓
🎉 Celebration
       ↓
Problem Solved
       ↓
Progress Updated
```

---

# 🎯 Project Goals

The main goals of Algo Coding Platform are:

1. Provide an interactive environment for DSA practice.
2. Make code execution and submission simple.
3. Help users track their coding progress.
4. Provide AI assistance during problem solving.
5. Provide administrators with problem management tools.
6. Create an engaging and developer-friendly coding experience.
7. Encourage consistent problem-solving practice.

---

# 📚 What I Learned

Through this project, I gained practical experience with:

### Frontend Development

* React component development
* React Router
* Redux state management
* API integration
* Monaco Editor
* Responsive UI
* Animations

### Backend Development

* Node.js
* Express.js
* REST APIs
* Authentication
* Authorization
* Database integration

### Database

* MongoDB
* Data modeling
* CRUD operations
* User and problem relationships

### Coding Platform Concepts

* Code execution
* Test case evaluation
* Submission handling
* Verdict generation
* Submission history
* Progress tracking

### AI Integration

* LLM API integration
* AI-powered problem assistance
* Prompt-based interaction

### Deployment

* AWS deployment
* Environment configuration
* Production application setup

---

# 🔮 Future Improvements

Some features planned for future versions include:

* 📈 Detailed user statistics
* 🏆 Leaderboard
* 🔥 Daily coding streak
* 🏅 Badges and achievements
* 📅 Daily coding challenges
* 🧠 More AI-powered learning features
* 💬 Discussion section
* ⭐ Problem bookmarking
* 📚 Topic-wise learning paths
* 🏆 Contest functionality
* 📊 Advanced performance analytics
* 🔔 Notifications
* 🌐 More programming languages

---

# 💡 Why I Built This Project

I built Algo Coding Platform to combine my learning in **frontend development, backend development, databases, APIs, authentication, AI integration, and DSA** into one complete project.

Rather than building only a simple CRUD application, I wanted to work on a project involving a real-world workflow:

```text
User
 ↓
Authentication
 ↓
Problem
 ↓
Code Editor
 ↓
Code Execution
 ↓
Test Cases
 ↓
Submission
 ↓
Judge
 ↓
Verdict
 ↓
Progress
```

This project gave me practical experience in connecting multiple technologies together to build a complete full-stack application.


# 📄 License

This project is created for educational and development purposes.

---

# 👨‍💻 Author

**Prajwal Kumbhare**

CSE (Data Science) Student | Full-Stack Developer | DSA Learner

Interested in:

* Software Development
* Full-Stack Development
* Data Structures & Algorithms
* AI/ML
* Problem Solving

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Keep Coding. Keep Learning. Keep Improving. 🚀**

> `code → debug → learn → repeat`
