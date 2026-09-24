# Smart Blood Donor Management System

## 1. Project Overview

The Smart Blood Donor Management System is a web-based application developed to simplify blood donor registration, donor searching, blood stock management, and blood request management.

The system provides a centralized platform where donors can register, log in, view their dashboard, and where users can search for donors, view available blood stock, and submit blood requests.

The project is also developed as a Software Configuration Management (SCM) project. Git and GitHub are used to manage source code, documentation, issues, branches, project tracking, and future automated builds and tests.

---

## 2. Project Objectives

The main objectives of the project are:

- Provide an easy donor registration system.
- Maintain donor information securely.
- Provide donor login and dashboard functionality.
- Allow users to search donors based on blood group and city.
- Maintain available blood stock information.
- Allow users to submit blood requests.
- Store project data in MongoDB.
- Provide REST APIs for communication between frontend and backend.
- Apply Software Configuration Management practices throughout development.
- Maintain traceability of project changes using Git and GitHub.

---

## 3. Main Features

### 3.1 Donor Registration

Donors can create an account by entering:

- Full Name
- Email
- Phone Number
- Date of Birth
- Gender
- Blood Group
- City
- Address
- Last Donation Date
- Password

Passwords are hashed using bcryptjs before being stored in the database.

### 3.2 Donor Login

Registered donors can log in using their email and password.

The system validates the credentials through the backend authentication API.

### 3.3 Donor Dashboard

After successful login, donors can access a dashboard containing:

- Donor name
- Email
- Blood group
- City
- Quick access to major system modules
- Logout option

### 3.4 Blood Stock Management

The system maintains blood stock for the following blood groups:

- A+
- A-
- B+
- B-
- AB+
- AB-
- O+
- O-

Users can view available units and update stock through the application.

### 3.5 Blood Request Management

Users can submit blood requests containing:

- Patient Name
- Phone Number
- Blood Group
- Units Required
- Hospital
- City
- Urgency

Request urgency can be:

- Normal
- Urgent
- Emergency

Requests are stored in MongoDB with a default Pending status.

### 3.6 Donor Search

Users can search for donors using:

- Blood Group
- City

The backend returns matching donors with relevant contact information.

### 3.7 Logout

Logged-in donors can securely log out from the application by clearing the stored donor session information.

---

## 4. Technology Stack

### Frontend

- React
- Vite
- JavaScript
- React Router
- CSS
- HTML

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB Atlas
- Mongoose

### Authentication and Security

- bcryptjs
- Environment variables using dotenv

### Software Configuration Management

- Git
- GitHub
- GitHub Issues
- GitHub Projects
- Git branches
- Git tags
- GitHub Actions

### Development Tools

- Visual Studio Code
- Node.js
- npm
- Git Bash / VS Code Terminal

---

## 5. System Architecture

The system follows a client-server architecture.

```text
                    SMART BLOOD DONOR MANAGEMENT SYSTEM

                              ┌───────────────┐
                              │     Users     │
                              └───────┬───────┘
                                      │
                                      ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │      Vite           │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST API
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │      Node.js        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    MongoDB Atlas    │
                         │       Database      │
                         └─────────────────────┘
```

---

## 6. Project Structure

```text
Smart Blood Donor Management
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── DonorRegistration.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── BloodStock.jsx
│   │   │   ├── BloodRequest.jsx
│   │   │   ├── FindDonors.jsx
│   │   │   └── DonorDashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
├── backend
│   ├── models
│   │   ├── Donor.js
│   │   ├── BloodStock.js
│   │   └── BloodRequest.js
│   │
│   ├── routes
│   │   ├── donorRoutes.js
│   │   ├── authRoutes.js
│   │   ├── bloodStockRoutes.js
│   │   └── bloodRequestRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── docs
│   ├── Configuration_Management_Plan.md
│   ├── Software_Requirements_Specification.md
│   ├── System_Architecture.md
│   ├── API_Documentation.md
│   ├── Test_Plan.md
│   └── Change_Log.md
│
└── README.md
```

Note: The `.env` file is intentionally excluded from Git version control because it contains sensitive configuration information.

---

## 7. Prerequisites

Before running the project, install:

1. Node.js
2. npm
3. Git
4. MongoDB Atlas account
5. Visual Studio Code

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

Verify Git:

```bash
git --version
```

---

## 8. Database Configuration

The project uses MongoDB Atlas.

The backend requires an environment file:

```text
backend/.env
```

Example structure:

```text
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Do not commit the `.env` file to GitHub.

The backend `.gitignore` contains:

```text
node_modules/
.env
```

---

## 9. Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd "Smart Blood Donor Management"
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

## 10. Running the Backend

From the backend directory:

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:5000
```

The backend connects to MongoDB Atlas when the database configuration is correct.

---

## 11. Running the Frontend

From the frontend directory:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

Open the displayed URL in a web browser.

---

## 12. Application Routes

The frontend currently contains the following routes:

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/register` | Donor registration |
| `/login` | Donor login |
| `/dashboard` | Donor dashboard |
| `/blood-stock` | Blood stock management |
| `/request-blood` | Blood request form |
| `/find-donors` | Donor search |

---

## 13. Backend API Endpoints

### Donor Registration

```text
POST /api/donors/register
```

Registers a new donor.

### Donor Search

```text
GET /api/donors
```

Supports blood group and city filtering.

Example:

```text
GET /api/donors?bloodGroup=O%2B&city=Vellore
```

### Login

```text
POST /api/auth/login
```

Authenticates a registered donor.

### Get Blood Stock

```text
GET /api/blood-stock
```

Returns available blood stock.

### Update Blood Stock

```text
POST /api/blood-stock
```

Creates or updates blood stock.

### Create Blood Request

```text
POST /api/blood-requests
```

Creates a new blood request.

### Get Blood Requests

```text
GET /api/blood-requests
```

Returns blood requests.

Detailed API information is available in:

```text
docs/API_Documentation.md
```

---

## 14. Testing

The project includes a dedicated Test Plan.

Testing covers:

- Functional testing
- Unit-level validation
- Integration testing
- API testing
- UI testing
- Database testing
- Regression testing
- Input validation
- Error handling
- Security-related validation

The detailed testing strategy is available in:

```text
docs/Test_Plan.md
```

---

## 15. Software Configuration Management

SCM is an important part of this project.

The project uses Git and GitHub to control and track project configuration items.

### SCM Practices Used

- Git repository
- Main branch
- Development branch
- Meaningful commit messages
- GitHub Issues
- GitHub Projects
- Configuration Management Plan
- Software Requirements Specification
- System Architecture documentation
- API documentation
- Test Plan
- Change Log
- GitHub Actions
- Release tags

---

## 16. Branching Strategy

The project uses the following branches:

```text
main
  │
  └── Stable project version

development
  │
  └── Active development and testing
```

Development work is performed in the `development` branch.

Stable versions can be merged into the `main` branch after appropriate testing and review.

---

## 17. Git Workflow

The basic development workflow is:

```text
Create / Modify Feature
        ↓
Test Locally
        ↓
Check Git Status
        ↓
Stage Changes
        ↓
Commit Changes
        ↓
Push to Development Branch
        ↓
Update GitHub Issue
        ↓
Update GitHub Project
        ↓
Review / Merge
```

Typical commands:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin development
```

---

## 18. GitHub Issues

The project uses GitHub Issues to track development work.

Current issues include:

- Issue #1 - Implement secure donor authentication
- Issue #2 - Implement blood stock management
- Issue #3 - Implement blood request management
- Issue #4 - Implement donor search
- Issue #5 - Create SCM project documentation

Issues provide traceability between requirements, development work, and configuration changes.

---

## 19. GitHub Project Board

A GitHub Project board named:

```text
Smart Blood Donor Management - SCM
```

is used to track project progress.

The board contains:

```text
To Do
In Progress
Done
```

Issues are moved across the board according to their development status.

---

## 20. Project Documentation

The `docs` directory contains important project documentation:

### Configuration Management Plan

```text
docs/Configuration_Management_Plan.md
```

Defines the SCM strategy and configuration management process.

### Software Requirements Specification

```text
docs/Software_Requirements_Specification.md
```

Defines system requirements and acceptance criteria.

### System Architecture

```text
docs/System_Architecture.md
```

Describes the system architecture and component interaction.

### API Documentation

```text
docs/API_Documentation.md
```

Documents backend REST APIs.

### Test Plan

```text
docs/Test_Plan.md
```

Defines testing strategy and test cases.

### Change Log

```text
docs/Change_Log.md
```

Records significant project changes and configuration updates.

---

## 21. Security Considerations

The project includes the following security measures:

- Password hashing using bcryptjs
- Environment variables for database configuration
- `.env` excluded from Git
- Backend validation
- Frontend required-field validation
- Password fields are not returned in login responses
- Database access controlled through MongoDB Atlas configuration

JWT-based authentication and stronger authorization mechanisms can be added as future enhancements.

---

## 22. Error Handling

The system handles common errors such as:

- Duplicate donor email
- Invalid login credentials
- Missing required fields
- Invalid blood group
- Invalid blood request values
- Backend connection failures
- Database connection failures
- API request failures

Appropriate response messages are returned by the backend APIs.

---

## 23. Current Development Status

The following major modules have been implemented:

- Project structure
- React frontend
- Express backend
- MongoDB Atlas integration
- Donor registration
- Password hashing
- Donor login
- Donor dashboard
- Logout
- Blood stock management
- Blood request management
- Donor search
- REST API documentation
- System architecture documentation
- Software requirements specification
- Configuration management plan
- Test plan
- Change log
- GitHub Issues
- GitHub Project board
- Development branch

---

## 24. Future Enhancements

Possible future enhancements include:

- JWT-based authentication
- Role-based access control
- Admin dashboard
- Donor availability status
- Email notifications
- SMS notifications
- Emergency donor alerts
- Blood request approval workflow
- Automatic blood stock updates
- Blood donation history
- Donor eligibility verification
- Location-based donor matching
- Advanced search and filtering
- Cloud deployment
- Automated testing
- Continuous Integration and Continuous Deployment

---

## 25. Limitations

The current implementation is a student project prototype.

Some information displayed in the interface may represent sample or demonstration data.

The current authentication implementation uses local browser storage for the logged-in donor session and is not intended to represent production-grade authentication.

Production deployment would require additional security controls, authorization, monitoring, validation, and privacy protections.

---

## 26. SCM Configuration Items

The major configuration items include:

```text
CI-01  Frontend Source Code
CI-02  Backend Source Code
CI-03  Database Models
CI-04  API Routes
CI-05  UI Components
CI-06  CSS Files
CI-07  Configuration Files
CI-08  Documentation
CI-09  Git Repository
CI-10  GitHub Issues
CI-11  GitHub Project
CI-12  GitHub Actions Workflow
CI-13  Release Tags
```

---

## 27. Repository

GitHub repository:

```text
smart-blood-donor-management
```

The repository contains the source code, documentation, configuration files, and SCM history of the project.

---

## 28. Project Team

Project:

Smart Blood Donor Management System

Academic Context:

Software Configuration Management

Development Environment:

Visual Studio Code

Version Control:

Git

Repository Hosting:

GitHub

Database:

MongoDB Atlas

---

## 29. Version Information

Current project version:

```text
Development Version
```

Development branch:

```text
development
```

Stable releases will be identified using Git tags.

Example:

```text
v1.0.0
```

---

## 30. Contribution Workflow

For any future modification:

1. Identify the required change.
2. Create or update a GitHub Issue.
3. Modify the required configuration item.
4. Test the change.
5. Review the changes using `git status`.
6. Stage the changes.
7. Commit using a meaningful message.
8. Push to the development branch.
9. Update the related GitHub Issue.
10. Update the GitHub Project board.
11. Update documentation if required.
12. Merge the stable change into the main branch after review.

---

## 31. Conclusion

The Smart Blood Donor Management System provides a centralized web-based solution for donor management, blood stock management, donor searching, and blood request management.

The project also demonstrates practical Software Configuration Management by using Git, GitHub, branches, commits, issues, project boards, documentation, testing, and automated workflow support.

The README serves as the primary entry point for understanding, installing, running, testing, and maintaining the project.
