# User Feedback System

## Overview

The User Feedback System is a full-stack web application designed to collect and manage feedback from users. It is developed as part of an academic assignment to demonstrate the integration of a React-based frontend with a Node.js and Express backend, connected to a database such as MongoDB or PostgreSQL. The application allows users to submit feedback through a form, stores the data securely in a database, and provides a dashboard interface to view, filter, and sort the submitted feedback.

---

## Objectives

1. To build a full-stack application using modern web technologies.
2. To create a simple and intuitive form for collecting user feedback.
3. To securely store feedback data in a database.
4. To display the collected feedback in a dashboard with sorting and filtering capabilities.
5. To ensure the application is scalable, responsive, and follows clean coding practices.

---

## Technologies Used

### Frontend

- React (Functional Components and Hooks)
- Axios for HTTP requests
- HTML, CSS, JavaScript
- Optionally: Tailwind CSS or Bootstrap for styling

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose or PostgreSQL with Sequelize
- dotenv for environment variable management
- Middleware: CORS and body-parser

---

## Project Structure

The project is divided into two main parts: frontend and backend.

user-feedback-system/
│
├── frontend/ # React application for user input and dashboard
│ ├── src/
│ │ ├── App.js
│ │ └── components/
│ │ ├── FeedbackForm.js
│ │ └── FeedbackDashboard.js
│ └── package.json
│
├── backend/ # Node.js + Express API server
│ ├── app.js
│ ├── routes/
│ │ └── feedback.js
│ ├── controllers/
│ │ └── feedbackController.js
│ ├── models/
│ │ └── Feedback.js
│ ├── config/
│ │ └── db.js
│ ├── .env
│ └── package.json
│
└── README.md # Project documentation

yaml
Copy
Edit

---

## How to Run the Project

### Prerequisites

- Node.js and npm installed
- MongoDB or PostgreSQL running locally or through a cloud provider (like MongoDB Atlas or ElephantSQL)
- Git (optional, for version control and pushing to GitHub)

---

### Setting up the Backend

1. Navigate to the backend folder:
cd backend

markdown
Copy
Edit

2. Install backend dependencies:
npm install

markdown
Copy
Edit

3. Create a `.env` file and add your configuration:
PORT=5000
DB_URI=your_mongodb_or_postgresql_connection_string

markdown
Copy
Edit

4. Start the backend server:
npm start

yaml
Copy
Edit

The backend should now be running on `http://localhost:5000`.

---

### Setting up the Frontend

1. Open a new terminal window.
2. Navigate to the frontend folder:
cd frontend

markdown
Copy
Edit

3. Install frontend dependencies:
npm install

markdown
Copy
Edit

4. Start the React development server:
npm start

yaml
Copy
Edit

The frontend should now be running on `http://localhost:3000`.

---

## API Endpoints

### POST `/feedback`

- Description: Submit feedback to the server.
- Request body:
```json
{
 "name": "John Doe",
 "email": "john@example.com",
 "message": "Great application!",
 "category": "suggestion"
}
GET /feedback
Description: Fetch all feedback entries for display on the dashboard.

Data Model
The feedback data includes the following fields:

name: Name of the user

email: Email address of the user

message: Feedback message

category: Optional (suggestion, bug, feature request)

createdAt: Timestamp (automatically generated)

Features
A simple user interface to collect feedback.

REST API for submitting and retrieving feedback.

Dashboard to view, sort, and filter feedback entries.

Optional categorization of feedback.

Backend connected to a persistent database.

Scalable and clean architecture.

Fully responsive layout for use on different devices.

Optional Enhancements
Export feedback to PDF or CSV

Add authentication for dashboard access

Generate analytics or graphs for feedback categories

Email confirmation for feedback submission

Submission Instructions
Push both frontend/ and backend/ folders to a public GitHub repository.

Include this README.md file at the root of the project.

Share the GitHub repository link with your instructor or through the provided submission channel.

Author
Name: Pavankumar Yadav
GitHub Profile: https://github.com/pavankumaryadav319

License
This project was developed as part of an academic assignment and is available for learning and demonstration purposes.
