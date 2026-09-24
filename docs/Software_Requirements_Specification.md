# Software Requirements Specification (SRS)

## Smart Blood Donor Management System

---

## 1. Document Information

Item: Project Name
Details: Smart Blood Donor Management System

Item: Document Name
Details: Software Requirements Specification

Item: Project Type
Details: Web-Based Application

Item: Subject
Details: Software Configuration Management

Item: Technology
Details: React, Node.js, Express.js, MongoDB

Item: Frontend
Details: React + Vite

Item: Backend
Details: Node.js + Express.js

Item: Database
Details: MongoDB Atlas

Item: Version
Details: 1.0

Item: Prepared By
Details: Thilak

Item: Development Branch
Details: development

Item: Main Branch
Details: main

---

# 2. Introduction

## 2.1 Purpose

The purpose of the Smart Blood Donor Management System is to provide a web-based platform for managing blood donors, blood stock, blood requests, and donor searching.

The system allows users to register as blood donors, securely log in, view their dashboard, search for suitable donors, check available blood stock, and submit blood requests.

The project also demonstrates Software Configuration Management practices using Git and GitHub.

## 2.2 Scope

The Smart Blood Donor Management System covers the following major functions:

- Donor registration
- Donor login
- Donor dashboard
- Secure password hashing
- Blood stock management
- Blood request management
- Donor search
- Blood group filtering
- City-based donor filtering
- MongoDB database management
- Git and GitHub-based version control
- GitHub Issues for requirement and change tracking
- GitHub Projects for task management
- Git branches for development management
- Documentation management

## 2.3 Intended Users

The system is intended for:

1. Blood donors
2. Patients or their representatives
3. Hospitals
4. Blood bank administrators
5. Project administrators

---

# 3. Overall Description

## 3.1 Product Perspective

The Smart Blood Donor Management System is a client-server web application.

The system consists of three major layers:

### Frontend

The frontend is developed using React and Vite.

It provides:

- User interface
- Donor registration form
- Login page
- Donor dashboard
- Blood stock page
- Blood request page
- Donor search page

### Backend

The backend is developed using Node.js and Express.js.

It provides:

- REST API endpoints
- Donor management
- Authentication
- Blood stock management
- Blood request management
- Database communication

### Database

MongoDB Atlas is used to store application data.

The database contains information related to:

- Donors
- Blood stock
- Blood requests

---

# 4. System Features

## 4.1 Donor Registration

The system shall allow a new donor to create an account.

The registration form shall collect:

- Full name
- Email
- Phone number
- Date of birth
- Gender
- Blood group
- City
- Address
- Last donation date
- Password

The system shall validate the required fields before creating the donor account.

The email address shall be unique.

Passwords shall be stored using password hashing.

## 4.2 Donor Login

The system shall allow registered donors to log in using:

- Email
- Password

The backend shall verify the provided credentials.

If the credentials are valid, the donor shall be allowed to access the dashboard.

If the credentials are invalid, the system shall display an appropriate error message.

## 4.3 Donor Dashboard

After successful login, the donor shall be able to access a dashboard.

The dashboard shall display basic donor information such as:

- Name
- Email
- Blood group
- City

The dashboard shall provide quick navigation to:

- Blood Stock
- Find Donors
- Request Blood
- Logout

## 4.4 Blood Stock Management

The system shall allow blood stock information to be maintained for the following blood groups:

- A+
- A-
- B+
- B-
- AB+
- AB-
- O+
- O-

Each blood group shall contain the number of available units.

The system shall allow application functionality to:

- View blood stock
- Add blood stock
- Update blood stock

The blood stock data shall be stored in MongoDB.

## 4.5 Blood Request Management

The system shall allow users to submit blood requests.

The blood request form shall collect:

- Patient name
- Phone number
- Blood group
- Units required
- Hospital
- City
- Urgency

The urgency levels shall include:

- Normal
- Urgent
- Emergency

Each request shall initially have the status:

Pending

Possible request statuses include:

- Pending
- Approved
- Completed
- Rejected

## 4.6 Donor Search

The system shall allow users to search for donors.

Users shall be able to search using:

- Blood group
- City

The system shall return matching donors from the database.

The donor search results shall display:

- Donor name
- Blood group
- City
- Phone number

## 4.7 Logout

The system shall provide a logout option for authenticated donors.

When the donor logs out:

- Stored donor login information shall be removed from local storage.
- The user shall be redirected to the login page.

---

# 5. Functional Requirements

## FR-01: Donor Registration

The system shall allow users to register as blood donors.

## FR-02: Email Validation

The system shall prevent multiple donor accounts from being created using the same email address.

## FR-03: Password Security

The system shall hash donor passwords before storing them in the database.

## FR-04: Donor Authentication

The system shall authenticate donors using their registered email and password.

## FR-05: Dashboard Access

The system shall provide dashboard access after successful login.

## FR-06: Blood Stock Viewing

The system shall display available blood stock for all supported blood groups.

## FR-07: Blood Stock Updating

The system shall allow blood stock quantities to be added or updated.

## FR-08: Blood Request Creation

The system shall allow users to submit blood requests.

## FR-09: Blood Request Storage

The system shall store submitted blood requests in MongoDB.

## FR-10: Donor Search

The system shall allow users to search donors based on blood group.

## FR-11: City Filtering

The system shall support optional city-based donor filtering.

## FR-12: Logout

The system shall provide a logout function for registered donors.

---

# 6. Non-Functional Requirements

## 6.1 Performance

The system should provide responses within a reasonable time under normal usage.

Database queries should be optimized to avoid unnecessary delays.

## 6.2 Security

The system shall:

- Hash passwords before database storage.
- Avoid storing sensitive configuration values in source control.
- Store MongoDB connection information in environment variables.
- Exclude .env files from Git using .gitignore.
- Validate user input.

## 6.3 Usability

The system should provide:

- Simple navigation
- Clear forms
- Meaningful error messages
- Responsive user interface
- Easy access to major features

## 6.4 Reliability

The system should handle invalid requests without crashing.

Backend errors should return appropriate HTTP responses.

## 6.5 Maintainability

The application shall use a modular structure.

Frontend pages and backend routes shall be separated according to functionality.

Git and GitHub shall be used to track changes.

## 6.6 Scalability

The system architecture should allow future features to be added without major changes to the existing structure.

Possible future features include:

- Administrator dashboard
- Email notifications
- SMS notifications
- JWT authentication
- Hospital management
- Donation history
- Blood donation eligibility checking

---

# 7. User Interface Requirements

## 7.1 Home Page

The home page shall provide:

- Application name
- Navigation menu
- Introduction
- Blood availability information
- Donor registration option
- Blood search option
- Emergency blood section

## 7.2 Registration Page

The registration page shall contain all required donor registration fields.

## 7.3 Login Page

The login page shall contain:

- Email field
- Password field
- Login button
- Registration link

## 7.4 Dashboard

The dashboard shall display donor information and quick access options.

## 7.5 Blood Stock Page

The blood stock page shall display the available units for each blood group.

## 7.6 Blood Request Page

The blood request page shall provide a form for submitting blood requirements.

## 7.7 Find Donors Page

The donor search page shall provide filters for:

- Blood group
- City

---

# 8. System Architecture

The application follows a client-server architecture.

SMART BLOOD DONOR MANAGEMENT SYSTEM
|
+---------------------+---------------------+
|                                           |
FRONTEND                                   BACKEND
React + Vite                         Node.js + Express
|                                           |
|                 REST APIs                 |
+---------------------+---------------------+
|
MongoDB Atlas
|
+---------------------+---------------------+---------------------+
|                                           |                     |
Donors                                Blood Stock          Blood Requests

---

# 9. Technology Requirements

## 9.1 Frontend Technologies

- React
- Vite
- JavaScript
- CSS
- React Router

## 9.2 Backend Technologies

- Node.js
- Express.js
- Mongoose
- bcryptjs
- CORS
- dotenv

## 9.3 Database

MongoDB Atlas shall be used as the cloud database.

## 9.4 Development Tools

- Visual Studio Code
- Git
- GitHub
- GitHub Issues
- GitHub Projects
- GitHub Actions

---

# 10. Database Requirements

The system shall maintain the following major collections.

## 10.1 Donor Collection

Important fields:

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
- createdAt
- updatedAt

## 10.2 Blood Stock Collection

Important fields:

- bloodGroup
- unitsAvailable
- lastUpdated
- createdAt
- updatedAt

## 10.3 Blood Request Collection

Important fields:

- patientName
- phone
- bloodGroup
- unitsRequired
- hospital
- city
- urgency
- status
- createdAt
- updatedAt

---

# 11. API Requirements

The backend shall provide REST API endpoints.

## 11.1 Donor Registration

POST /api/donors/register

Purpose:

Creates a new donor account.

## 11.2 Donor Search

GET /api/donors

Purpose:

Returns donors based on optional blood group and city filters.

Example:

GET /api/donors?bloodGroup=O+&city=Vellore

## 11.3 Donor Login

POST /api/auth/login

Purpose:

Authenticates a registered donor.

## 11.4 Blood Stock

GET /api/blood-stock

Purpose:

Returns available blood stock.

## 11.5 Blood Stock Update

POST /api/blood-stock

Purpose:

Creates or updates blood stock.

## 11.6 Blood Request Creation

POST /api/blood-requests

Purpose:

Creates a new blood request.

## 11.7 Blood Request List

GET /api/blood-requests

Purpose:

Returns submitted blood requests.

---

# 12. Validation Requirements

The system shall validate user input before processing.

Examples include:

- Required fields cannot be empty.
- Email must follow a valid format.
- Password must be provided.
- Blood group must be one of the supported blood groups.
- Units required must be at least 1.
- Blood stock units cannot be negative.
- Duplicate donor email addresses shall not be allowed.

---

# 13. Error Handling Requirements

The system shall provide meaningful error responses.

Examples:

Duplicate Email:
Email already registered

Invalid Login:
Invalid email or password

Backend Connection Failure:
Unable to connect to backend

For invalid requests, the backend shall return an appropriate HTTP status code and error message.

---

# 14. Configuration Requirements

Sensitive configuration values shall not be committed to GitHub.

The backend shall use an environment file:

.env

Example configuration:

PORT=5000
MONGO_URI=<MongoDB connection string>

The .env file shall be excluded from version control using:

.env

in .gitignore.

---

# 15. Software Configuration Management Requirements

The project shall follow SCM practices throughout development.

## 15.1 Version Control

Git shall be used for source code version control.

## 15.2 Remote Repository

GitHub shall be used as the remote repository.

Repository:

smart-blood-donor-management

## 15.3 Branch Management

The project shall maintain:

main
development

The main branch shall represent stable project code.

The development branch shall be used for ongoing development.

## 15.4 Commit Management

Commits shall use meaningful messages.

Examples:

Initial project setup
Add React frontend setup and homepage
Add donor registration module
Add donor authentication and dashboard navigation
Add configuration management plan

## 15.5 Issue Management

GitHub Issues shall be used to track project work.

Current project issues include:

- Implement secure donor authentication
- Implement blood stock management
- Implement blood request management
- Implement donor search
- Create SCM project documentation

## 15.6 Project Management

GitHub Projects shall be used to organize tasks.

The project board contains:

To Do
In Progress
Done

---

# 16. Development Environment

The following environment is required.

Operating System:
Windows

Node.js:
Node.js 24.x

Git:
Git 2.x

Code Editor:
Visual Studio Code

Database:
MongoDB Atlas

---

# 17. Installation Requirements

## Frontend Installation

Navigate to:

frontend

Install dependencies:

npm install

Run the frontend:

npm run dev

The frontend runs on:

http://localhost:5173

## Backend Installation

Navigate to:

backend

Install dependencies:

npm install

Run the backend:

npm run dev

The backend runs on:

http://localhost:5000

---

# 18. Testing Requirements

The following functionalities shall be tested:

1. Donor registration
2. Duplicate email validation
3. Donor login
4. Invalid login
5. Dashboard access
6. Logout
7. Blood stock viewing
8. Blood stock updating
9. Blood request creation
10. Donor search
11. Blood group filtering
12. City filtering
13. Backend API responses
14. Database storage

---

# 19. Security Requirements

The application shall follow basic security practices.

These include:

- Password hashing using bcryptjs.
- Environment variables for database credentials.
- .env exclusion from Git.
- Input validation.
- Avoiding exposure of passwords through API responses.
- Proper HTTP status codes.
- Restricting database access using MongoDB Atlas network configuration.

---

# 20. Backup and Recovery

The project source code shall be maintained in GitHub.

Git history shall provide version recovery for source code.

MongoDB Atlas shall be used for database storage.

Future improvements may include:

- Automated database backups
- Database recovery procedures
- Automated deployment backups

---

# 21. Constraints

The current project has the following constraints:

- The application depends on an active MongoDB connection.
- The backend must be running for database operations.
- The frontend and backend currently run as separate services.
- The current authentication implementation uses local storage for maintaining donor login state.
- Advanced authentication such as JWT is planned as a future improvement.
- Blood stock values used during development may represent sample data.

---

# 22. Assumptions

The project assumes that:

1. Users have access to a web browser.
2. The backend server is available.
3. MongoDB Atlas is accessible.
4. Users provide valid information.
5. Donor information entered into the system is accurate.
6. Blood stock information is maintained correctly.

---

# 23. Future Enhancements

Future versions may include:

- JWT-based authentication
- Role-based access control
- Administrator dashboard
- Hospital accounts
- Email notifications
- SMS alerts
- Real-time blood stock updates
- Donation history
- Donor eligibility verification
- Location-based donor search
- Google Maps integration
- Blood request approval workflow
- Automated CI/CD using GitHub Actions
- Production deployment
- Advanced reporting and analytics

---

# 24. Acceptance Criteria

The project shall be considered functionally complete for the current version when:

- A new donor can register successfully.
- Donor passwords are stored securely using hashing.
- Registered donors can log in.
- Invalid credentials are rejected.
- Logged-in donors can access the dashboard.
- Donors can log out.
- Blood stock can be viewed.
- Blood stock can be updated.
- Blood requests can be submitted.
- Blood requests are stored in MongoDB.
- Donors can be searched by blood group.
- Donors can optionally be filtered by city.
- Application source code is maintained using Git.
- Project changes are pushed to GitHub.
- Project work is tracked using GitHub Issues and GitHub Projects.

---

# 25. Traceability

Requirement: Donor Registration
Related Module: Donor Registration
SCM Tracking: Issue #1

Requirement: Donor Login
Related Module: Authentication
SCM Tracking: Issue #1

Requirement: Dashboard
Related Module: Donor Dashboard
SCM Tracking: Issue #1

Requirement: Blood Stock
Related Module: Blood Stock Management
SCM Tracking: Issue #2

Requirement: Blood Requests
Related Module: Blood Request Management
SCM Tracking: Issue #3

Requirement: Donor Search
Related Module: Donor Search
SCM Tracking: Issue #4

Requirement: Documentation
Related Module: SCM Documentation
SCM Tracking: Issue #5

---

# 26. Current Implementation Status

Feature: React Frontend
Status: Completed

Feature: Homepage
Status: Completed

Feature: Donor Registration
Status: Completed

Feature: MongoDB Connection
Status: Completed

Feature: Password Hashing
Status: Completed

Feature: Donor Login
Status: Completed

Feature: Donor Dashboard
Status: Completed

Feature: Logout
Status: Completed

Feature: Blood Stock Management
Status: Completed

Feature: Blood Request Management
Status: Completed

Feature: Donor Search
Status: Completed

Feature: Git Repository
Status: Completed

Feature: Development Branch
Status: Completed

Feature: GitHub Issues
Status: Completed

Feature: GitHub Project Board
Status: Completed

Feature: Configuration Management Plan
Status: Completed

Feature: Software Requirements Specification
Status: In Progress

Feature: GitHub Actions CI
Status: Planned

Feature: JWT Authentication
Status: Planned

Feature: Production Deployment
Status: Planned

---

# 27. Document Change History

Version: 1.0
Date: 2026
Change Description: Initial Software Requirements Specification
Author: Thilak

---

# 28. Document Approval

This Software Requirements Specification serves as the baseline document for the current development version of the Smart Blood Donor Management System.

Future requirement changes shall be tracked using GitHub Issues and documented through version-controlled changes.

---

# 29. Conclusion

The Software Requirements Specification defines the functional and non-functional requirements of the Smart Blood Donor Management System.

The document provides a common reference for development, testing, configuration management, and future maintenance.

Git and GitHub shall be used to maintain traceability between requirements, implementation changes, issues, commits, and project documentation.

---

End of Document
