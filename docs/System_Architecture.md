# System Architecture Document

## Smart Blood Donor Management System

---

## 1. Document Information

Project Name: Smart Blood Donor Management System
Document Name: System Architecture
Project Type: Web-Based Application
Subject: Software Configuration Management
Version: 1.0
Prepared By: Thilak
Development Branch: development
Main Branch: main

---

# 2. Introduction

## 2.1 Purpose

This document describes the architecture of the Smart Blood Donor Management System.

It explains the major components of the application, the interaction between the frontend and backend, database communication, API flow, project structure, technologies used, and the movement of data through the system.

The document is maintained as part of the Software Configuration Management process.

## 2.2 Scope

The architecture covers:

- React frontend
- Node.js and Express backend
- REST API communication
- MongoDB Atlas database
- Donor management
- Authentication
- Blood stock management
- Blood request management
- Donor search
- Git and GitHub based source control

---

# 3. Architectural Style

The system follows a client-server architecture with a layered structure.

The major layers are:

1. Presentation Layer
2. Application/API Layer
3. Data Access Layer
4. Database Layer

High-level architecture:

SMART BLOOD DONOR MANAGEMENT SYSTEM
|
+------------------------------------------------+
|                                                |
|                 PRESENTATION LAYER             |
|                                                |
|                 React + Vite                    |
|                                                |
|  Home | Register | Login | Dashboard           |
|  Blood Stock | Blood Request | Find Donors     |
|                                                |
+------------------------+-----------------------+
                         |
                         | HTTP / REST API
                         |
+------------------------v-----------------------+
|                                                |
|                 APPLICATION LAYER              |
|                                                |
|                 Node.js + Express              |
|                                                |
|  Donor Routes | Auth Routes                    |
|  Blood Stock Routes | Blood Request Routes     |
|                                                |
+------------------------+-----------------------+
                         |
                         | Mongoose
                         |
+------------------------v-----------------------+
|                                                |
|                  DATABASE LAYER                |
|                                                |
|                    MongoDB Atlas               |
|                                                |
|  Donors | Blood Stock | Blood Requests         |
|                                                |
+------------------------------------------------+

---

# 4. Technology Stack

## 4.1 Frontend

The frontend is developed using:

- React
- Vite
- JavaScript
- CSS
- React Router

Purpose:

The frontend provides the user interface and communicates with backend APIs.

## 4.2 Backend

The backend is developed using:

- Node.js
- Express.js
- Mongoose
- bcryptjs
- CORS
- dotenv

Purpose:

The backend provides REST APIs, business logic, authentication, validation, and database communication.

## 4.3 Database

MongoDB Atlas is used as the cloud database.

Mongoose is used in the backend to define schemas and communicate with MongoDB.

## 4.4 Version Control and SCM

The following tools are used:

- Git
- GitHub
- GitHub Issues
- GitHub Projects
- Git branches
- Git commits
- Git tags
- GitHub Actions for planned automation

---

# 5. Frontend Architecture

The frontend is responsible for user interaction and presentation.

The React application uses React Router to navigate between application pages.

Main pages include:

- Home
- Donor Registration
- Login
- Donor Dashboard
- Blood Stock
- Blood Request
- Find Donors

Frontend structure:

frontend/
|
+-- src/
    |
    +-- App.jsx
    +-- App.css
    |
    +-- pages/
        |
        +-- DonorRegistration.jsx
        +-- DonorRegistration.css
        +-- Login.jsx
        +-- Login.css
        +-- DonorDashboard.jsx
        +-- DonorDashboard.css
        +-- BloodStock.jsx
        +-- BloodStock.css
        +-- BloodRequest.jsx
        +-- BloodRequest.css
        +-- FindDonors.jsx
        +-- FindDonors.css

---

# 6. Backend Architecture

The backend is responsible for:

- Processing client requests
- Validating data
- Authentication
- Password hashing
- Database operations
- Returning API responses

Backend structure:

backend/
|
+-- server.js
+-- package.json
+-- .env
+-- .gitignore
|
+-- models/
|   |
|   +-- Donor.js
|   +-- BloodStock.js
|   +-- BloodRequest.js
|
+-- routes/
    |
    +-- donorRoutes.js
    +-- authRoutes.js
    +-- bloodStockRoutes.js
    +-- bloodRequestRoutes.js

---

# 7. Server Architecture

The main backend entry point is:

backend/server.js

The server performs the following functions:

1. Loads environment variables.
2. Creates the Express application.
3. Enables CORS.
4. Enables JSON request parsing.
5. Connects to MongoDB.
6. Registers API routes.
7. Starts the server on port 5000.

Backend URL:

http://localhost:5000

---

# 8. API Architecture

The backend exposes REST API endpoints.

## Donor APIs

POST /api/donors/register

Used to register a new donor.

GET /api/donors

Used to search donors using blood group and optional city.

## Authentication API

POST /api/auth/login

Used to authenticate a registered donor.

## Blood Stock APIs

GET /api/blood-stock

Used to retrieve blood stock.

POST /api/blood-stock

Used to create or update blood stock.

## Blood Request APIs

POST /api/blood-requests

Used to create a blood request.

GET /api/blood-requests

Used to retrieve blood requests.

---

# 9. Database Architecture

MongoDB Atlas stores the application's persistent data.

The major collections are:

1. Donors
2. Blood Stock
3. Blood Requests

## 9.1 Donor Data

The Donor model contains:

- fullName
- email
- phone
- dateOfBirth
- gender
- bloodGroup
- city
- address
- lastDonationDate
- password
- timestamps

## 9.2 Blood Stock Data

The BloodStock model contains:

- bloodGroup
- unitsAvailable
- lastUpdated
- timestamps

The system supports:

- A+
- A-
- B+
- B-
- AB+
- AB-
- O+
- O-

## 9.3 Blood Request Data

The BloodRequest model contains:

- patientName
- phone
- bloodGroup
- unitsRequired
- hospital
- city
- urgency
- status
- timestamps

---

# 10. Authentication Architecture

The current authentication flow uses email and password.

Authentication flow:

1. User enters email and password.
2. Frontend sends credentials to the backend.
3. Backend searches for the donor by email.
4. bcryptjs compares the entered password with the stored hashed password.
5. If credentials are valid, donor information is returned.
6. Frontend stores the returned donor information in local storage.
7. User is redirected to the dashboard.

Logout flow:

1. User selects Logout.
2. Donor information is removed from local storage.
3. User is redirected to the Login page.

Future versions may use JWT-based authentication and role-based access control.

---

# 11. Donor Registration Data Flow

The donor registration process follows this flow:

User
|
v
Registration Form
|
v
React Frontend
|
v
POST /api/donors/register
|
v
Express Backend
|
v
Input Validation
|
v
Password Hashing
|
v
Donor Model
|
v
MongoDB Atlas
|
v
Registration Response
|
v
React Frontend
|
v
Success Message

---

# 12. Login Data Flow

The login process follows this flow:

User
|
v
Login Page
|
v
Email + Password
|
v
React Frontend
|
v
POST /api/auth/login
|
v
Express Backend
|
v
Find Donor
|
v
bcrypt Password Comparison
|
v
Authentication Result
|
v
React Frontend
|
v
Local Storage
|
v
Dashboard

---

# 13. Blood Stock Data Flow

The blood stock process follows this flow:

User
|
v
Blood Stock Page
|
v
React Frontend
|
v
GET /api/blood-stock
|
v
Express Backend
|
v
BloodStock Model
|
v
MongoDB Atlas
|
v
Blood Stock Data
|
v
React Frontend
|
v
Blood Stock Cards

For updates:

User
|
v
Blood Stock Form
|
v
POST /api/blood-stock
|
v
Express Backend
|
v
MongoDB Atlas
|
v
Updated Stock
|
v
Frontend Refresh

---

# 14. Blood Request Data Flow

The blood request process follows this flow:

User
|
v
Blood Request Form
|
v
React Frontend
|
v
POST /api/blood-requests
|
v
Express Backend
|
v
Validation
|
v
BloodRequest Model
|
v
MongoDB Atlas
|
v
Saved Request
|
v
Response to Frontend

---

# 15. Donor Search Data Flow

The donor search process follows this flow:

User
|
v
Find Donors Page
|
v
Select Blood Group
|
v
Enter City (Optional)
|
v
React Frontend
|
v
GET /api/donors
|
v
Express Backend
|
v
Donor Query
|
v
MongoDB Atlas
|
v
Matching Donors
|
v
Frontend
|
v
Donor Results

---

# 16. Component Interaction

The major component interaction is:

Home Page
|
+--> Donor Registration
|
+--> Login
|      |
|      +--> Dashboard
|
+--> Blood Stock
|
+--> Blood Request
|
+--> Find Donors

The frontend communicates with the backend through HTTP requests.

The backend communicates with MongoDB using Mongoose.

---

# 17. Project Directory Structure

Complete project structure:

Smart Blood Donor Management/
|
+-- frontend/
|   |
|   +-- src/
|   |   |
|   |   +-- pages/
|   |   +-- App.jsx
|   |   +-- App.css
|   |
|   +-- package.json
|   +-- vite.config.js
|   +-- index.html
|
+-- backend/
|   |
|   +-- models/
|   |   +-- Donor.js
|   |   +-- BloodStock.js
|   |   +-- BloodRequest.js
|   |
|   +-- routes/
|   |   +-- donorRoutes.js
|   |   +-- authRoutes.js
|   |   +-- bloodStockRoutes.js
|   |   +-- bloodRequestRoutes.js
|   |
|   +-- server.js
|   +-- package.json
|   +-- .env
|   +-- .gitignore
|
+-- docs/
|   +-- Configuration_Management_Plan.md
|   +-- Software_Requirements_Specification.md
|   +-- System_Architecture.md
|
+-- README.md

---

# 18. Network Communication

The frontend and backend communicate over HTTP during local development.

Frontend:

http://localhost:5173

Backend:

http://localhost:5000

The frontend sends HTTP requests to backend API endpoints.

The backend returns JSON responses.

Example communication:

React
|
| HTTP Request
v
Express API
|
| Database Query
v
MongoDB
|
| Database Response
v
Express API
|
| JSON Response
v
React

---

# 19. Environment Configuration

Sensitive configuration is stored in the backend environment file.

File:

backend/.env

Example:

PORT=5000
MONGO_URI=<MongoDB connection string>

The .env file is excluded from Git using .gitignore.

This prevents database credentials from being committed to the public repository.

---

# 20. Error Handling Architecture

Errors are handled at the backend API level.

The backend returns:

- HTTP status code
- Error message
- Optional error details during development

The frontend displays appropriate messages to users.

Examples:

Invalid login:
Invalid email or password

Duplicate donor:
Email already registered

Backend unavailable:
Unable to connect to backend

---

# 21. Security Architecture

The current system follows basic security practices.

Security mechanisms include:

1. Password hashing using bcryptjs.
2. Database credentials stored in environment variables.
3. .env excluded from Git.
4. Password fields are not returned in login responses.
5. Input validation.
6. MongoDB Atlas network access configuration.

The current frontend authentication state uses local storage.

Future versions may implement JWT tokens, secure cookies, refresh tokens, and role-based authorization.

---

# 22. Scalability Considerations

The application has been organized into separate frontend, backend, and database layers.

This separation allows future expansion.

Potential future changes include:

- Separate administrator frontend
- Hospital management module
- Notification service
- Email service
- SMS service
- Cloud deployment
- Load balancing
- Caching
- API versioning
- Microservices architecture

---

# 23. Deployment Architecture

The current application is developed and tested locally.

Development environment:

User Browser
|
v
React Development Server
Port 5173
|
v
Express Backend
Port 5000
|
v
MongoDB Atlas

A future production deployment may use:

User Browser
|
v
Cloud Frontend Hosting
|
v
Cloud Backend Server
|
v
MongoDB Atlas

Possible deployment platforms may include Vercel for frontend hosting and a suitable cloud platform for backend hosting.

---

# 24. Software Configuration Management Architecture

The project architecture also includes SCM components.

Developer
|
v
Local Working Directory
|
v
Git Repository
|
v
Development Branch
|
v
GitHub Repository
|
+--> Issues
|
+--> Projects
|
+--> Pull Requests
|
+--> Actions
|
+--> Tags / Releases
|
v
Main Branch

Git provides version control.

GitHub provides remote repository management, issue tracking, project management, collaboration, and planned CI automation.

---

# 25. Branching Architecture

The project currently uses:

main
development

Main branch:

- Represents stable code.
- Intended for release-ready versions.

Development branch:

- Used for ongoing development.
- New changes are committed here before stable release.

Future feature branches may follow a naming pattern such as:

feature/donor-registration
feature/blood-stock
feature/blood-request
feature/donor-search
feature/authentication

---

# 26. Configuration Items

Major configuration items include:

Source Code:
- frontend source files
- backend source files

Database Models:
- Donor.js
- BloodStock.js
- BloodRequest.js

API Routes:
- donorRoutes.js
- authRoutes.js
- bloodStockRoutes.js
- bloodRequestRoutes.js

Configuration:
- package.json
- .gitignore
- .env

Documentation:
- Configuration Management Plan
- Software Requirements Specification
- System Architecture

SCM Metadata:
- Git commits
- Git branches
- GitHub Issues
- GitHub Projects
- Git tags

---

# 27. Architecture Decisions

The following decisions were made:

## Decision 1: React for Frontend

React was selected to provide a component-based user interface.

## Decision 2: Node.js and Express for Backend

Node.js and Express were selected to provide lightweight REST APIs.

## Decision 3: MongoDB Atlas for Database

MongoDB Atlas was selected for cloud-based database storage.

## Decision 4: Mongoose for Database Access

Mongoose was selected for schema definition and MongoDB communication.

## Decision 5: Git and GitHub for SCM

Git and GitHub were selected to manage version control and project configuration.

---

# 28. Current Architecture Status

Component: React Frontend
Status: Completed

Component: Express Backend
Status: Completed

Component: MongoDB Atlas
Status: Completed

Component: Donor Registration
Status: Completed

Component: Authentication
Status: Completed

Component: Donor Dashboard
Status: Completed

Component: Blood Stock Management
Status: Completed

Component: Blood Request Management
Status: Completed

Component: Donor Search
Status: Completed

Component: Git Repository
Status: Completed

Component: GitHub Issues
Status: Completed

Component: GitHub Project
Status: Completed

Component: GitHub Actions
Status: Planned

Component: JWT Authentication
Status: Planned

Component: Production Deployment
Status: Planned

---

# 29. Future Architectural Enhancements

Future architecture improvements may include:

- JWT-based authentication
- Role-based authorization
- Admin dashboard
- Hospital dashboard
- Notification service
- Email notification system
- SMS notification system
- Real-time notifications
- Redis caching
- API versioning
- Automated CI/CD
- Cloud deployment
- Monitoring and logging
- Automated database backup
- Advanced analytics

---

# 30. Document Change History

Version: 1.0
Date: 2026
Change Description: Initial System Architecture Document
Author: Thilak

---

# 31. Conclusion

The Smart Blood Donor Management System follows a layered client-server architecture consisting of a React frontend, Node.js and Express backend, and MongoDB Atlas database.

The architecture separates presentation, application logic, and data storage responsibilities.

The system is organized to support maintainability, testing, configuration management, and future scalability.

Git and GitHub are integrated into the development process to maintain source-code history, track issues, manage development tasks, and support future automated workflows.

---

End of Document
