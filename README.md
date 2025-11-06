🚀 NebulaBoard – Full-Stack Kanban Task Management System

📌 A clean, modern Kanban-style project management application built with React (Vite) + Spring Boot + PostgreSQL, featuring JWT Authentication, role-based access, and smart task workflows.

📘 Overview

NebulaBoard is a full-stack Kanban Task Management System that allows users to create projects, manage tasks visually, assign priorities, track deadlines, and move work through “To-Do → In-Progress → Done” stages.

It also includes Admin controls, user authentication, protected routes, CSV export, and a fully responsive UI.

⚙️ Features
✅ Authentication & Security

JWT-based Login & Registration

Admin & User roles

Protected routes (frontend)

Authentication middleware

✅ Project & Task Management

Create, update, delete projects

Add tasks with:

Title

Description

Priority (LOW / MEDIUM / HIGH)

Assignee

Due date

Move tasks between statuses

Edit or delete tasks

View task alerts:

✅ Due Soon

❌ Overdue

✅ Admin Dashboard

Manage all users

View global statistics

Access all projects

✅ Extra Utilities

Export tasks to CSV

Sorting by date & priority

Clean, modern UI layout

🛠️ Tech Stack
Frontend

React (Vite)

Axios

React Router

Context API (Auth)

CSS (Custom styles)

Backend

Java 17+

Spring Boot

Spring Security (JWT)

Spring Data JPA

PostgreSQL

Maven

📁 Project Structure
NebulaBoard/
 ├── backend/          # Spring Boot API
 │   ├── controller/
 │   ├── service/
 │   ├── repository/
 │   ├── model/
 │   └── security/
 │
 └── frontend/         # React + Vite app
     ├── src/pages/
     ├── src/components/
     ├── src/context/
     ├── src/layout/
     └── src/styles/

🚀 How to Run the Project
✅ 1️⃣ Clone the repository
git clone https://github.com/Alannobl/Nebulaboard.git

✅ 2️⃣ Backend Setup (Spring Boot)
cd backend
mvn clean install
mvn spring-boot:run


Make sure PostgreSQL is running and update DB credentials in:
backend/src/main/resources/application.properties

✅ 3️⃣ Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


Frontend runs at:
👉 http://localhost:5173

Backend runs at:
👉 http://localhost:8080
