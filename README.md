NebulaBoard

A Full-Stack Kanban Project Management System (Spring Boot + React)

NebulaBoard is a modern, lightweight Trello-style project management tool built using React (Vite) for the frontend and Spring Boot for the backend.
It supports user authentication, task tracking, project boards, admin controls, and real-time updates.


✅ Features
🔐 Authentication & Security

JWT-based Login & Registration

Admin & User Roles

Protected Routes (Frontend)

Authentication Middleware



🗂 Project & Task Management

Create, view, edit & delete projects

Kanban-style task columns: To Do → In Progress → Done

Drag-and-Drop (frontend ready)

Task updates stored in database

User-specific boards



🛠 Admin Panel

View all users

Manage all projects

View analytics for tasks & activity



🎨 Frontend (React + Vite)

Beautiful clean UI

Responsive layout

Modern CSS styles

API service layer with Axios

Context-based Auth state



⚙ Backend (Spring Boot)

REST APIs

JPA + Hibernate

Secure password hashing

Service-layer architecture

Exception handlers

Modular and scalable structure



🧱 Tech Stack
Frontend:

React (Vite)

Axios

React Router

Context API

Modern CSS

Backend:

Java 17

Spring Boot

Spring Security (JWT)

Spring Data JPA

MySQL / PostgreSQL

Maven



📁 Project Structure
NebulaBoard/
│── backend/               # Spring Boot backend
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│
└── frontend/              # React + Vite frontend
    ├── src/
    ├── public/
    ├── package.json



🚀 Running the Backend (Spring Boot)
1️⃣ Navigate to backend folder
cd backend

2️⃣ Configure Database

Edit:

src/main/resources/application.properties

3️⃣ Run the backend
mvn spring-boot:run



Backend runs at:

👉 http://localhost:8080

🚀 Running the Frontend (React + Vite)**
1️⃣ Go to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start Vite dev server
npm run dev



Frontend runs at:

👉 http://localhost:5173

🔗 API Endpoints (Sample)
Authentication
POST /api/auth/register
POST /api/auth/login

Projects
GET /api/projects
POST /api/projects
GET /api/projects/{id}

Tasks
GET /api/projects/{id}/tasks
POST /api/projects/{id}/tasks
PUT /api/tasks/{id}
DELETE /api/tasks/{id}
