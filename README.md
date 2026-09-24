# Smart Blood Donor Management System

## Software Configuration Management Project

A web-based Smart Blood Donor Management System developed to manage blood donors, blood stock, blood requests, and donor search operations. The project also demonstrates Software Configuration Management (SCM) practices using Git, GitHub, GitHub Issues, GitHub Projects, GitHub Actions, branches, commits, and release tags.

---

## 1. Project Overview

The Smart Blood Donor Management System is designed to provide a centralized platform for managing blood donation and blood requirement information.

The system allows users to:

- Register as blood donors
- Login securely using registered credentials
- View a personalized donor dashboard
- Search for donors based on blood group and city
- View available blood stock
- Update blood stock information
- Submit blood requests
- View submitted blood requests
- Manage project changes using SCM practices

---

## 2. Project Objectives

The main objectives of the project are:

1. Develop a functional web-based blood donor management system.
2. Maintain donor information in a centralized database.
3. Provide blood stock management functionality.
4. Allow users to submit blood requests.
5. Provide donor search functionality.
6. Apply Software Configuration Management principles throughout development.
7. Maintain project versions using Git and GitHub.
8. Track project changes using GitHub Issues and GitHub Projects.
9. Maintain project documentation as controlled configuration items.
10. Automate build and testing activities using GitHub Actions.

---

## 3. Key Features

### Donor Management

- Donor registration
- Donor login
- Password hashing using bcrypt
- Donor dashboard
- Donor logout
- Donor search by blood group
- Donor search by city

### Blood Stock Management

- View blood stock
- Add or update blood stock
- Display availability status
- Display low-stock status
- Display out-of-stock status

### Blood Request Management

- Submit blood requests
- Specify patient information
- Specify required blood group
- Specify required units
- Specify hospital and city
- Select urgency level
- Store request status

### User Interface

- Responsive React interface
- Navigation between system modules
- Home page
- Donor registration page
- Login page
- Dashboard
- Blood stock page
- Blood request page
- Donor search page

---

## 4. Technology Stack

### Frontend

- React
- Vite
- JavaScript
- CSS
- React Router

### Backend

- Node.js
- Express.js
- REST APIs
- Mongoose
- bcryptjs
- CORS
- dotenv

### Database

- MongoDB Atlas
- MongoDB
- Mongoose ODM

### Software Configuration Management

- Git
- GitHub
- GitHub Issues
- GitHub Projects
- GitHub Actions
- Git branches
- Git tags

### Development Tools

- Visual Studio Code
- Node.js
- npm
- Git Bash / Command Prompt
- Web browser

---

## 5. System Architecture

The system follows a client-server architecture.

```text
+---------------------------+
|       User / Browser      |
+-------------+-------------+
              |
              v
+---------------------------+
|     React Frontend        |
|        + Vite             |
+-------------+-------------+
              |
              | REST API / HTTP
              v
+---------------------------+
|    Node.js + Express      |
|        Backend            |
+-------------+-------------+
              |
              | Mongoose
              v
+---------------------------+
|       MongoDB Atlas       |
|         Database          |
+---------------------------+
```

---

## 6. Project Structure

```text
Smart Blood Donor Management
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Login.css
│   │   │   ├── DonorRegistration.jsx
│   │   │   ├── DonorRegistration.css
│   │   │   ├── DonorDashboard.jsx
│   │   │   ├── DonorDashboard.css
│   │   │   ├── BloodStock.jsx
│   │   │   ├── BloodStock.css
│   │   │   ├── BloodRequest.jsx
│   │   │   ├── BloodRequest.css
│   │   │   ├── FindDonors.jsx
│   │   │   └── FindDonors.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── backend
│   ├── models
│   │   ├── Donor.js
│   │   ├── BloodStock.js
│   │   └── BloodRequest.js
│   ├── routes
│   │   ├── donorRoutes.js
│   │   ├── authRoutes.js
│   │   ├── bloodStockRoutes.js
│   │   └── bloodRequestRoutes.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
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

---

## 7. Backend API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/donors/register` | Register a new donor |
| POST | `/api/auth/login` | Authenticate a donor |
| GET | `/api/donors` | Search and retrieve donors |
| GET | `/api/blood-stock` | Retrieve blood stock |
| POST | `/api/blood-stock` | Add or update blood stock |
| POST | `/api/blood-requests` | Create a blood request |
| GET | `/api/blood-requests` | Retrieve blood requests |

For detailed API information, refer to:

`docs/API_Documentation.md`

---

## 8. Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git
- MongoDB Atlas account
- Visual Studio Code or another code editor

Verify Node.js and npm:

```bash
node -v
npm -v
```

Verify Git:

```bash
git --version
```

---

## 9. Installation and Setup

### Step 1: Clone the Repository

```bash
git clone <your-github-repository-url>
```

Move into the project directory:

```bash
cd "Smart Blood Donor Management"
```

---

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### Step 3: Install Backend Dependencies

Open another terminal and run:

```bash
cd backend
npm install
```

---

### Step 4: Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Do not commit the `.env` file to GitHub.

The `.gitignore` file should contain:

```text
node_modules/
.env
```

---

## 10. Running the Application

### Start the Backend

From the `backend` directory:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

---

### Start the Frontend

From the `frontend` directory:

```bash
npm run dev
```

The frontend normally runs on:

```text
http://localhost:5173
```

Open the frontend URL in a web browser.

---

## 11. Git Branching Strategy

The project uses Git branches to separate development work from the main branch.

Current branches include:

```text
main
development
```

The `development` branch is used for ongoing development and integration.

The `main` branch represents the stable project baseline.

Example workflow:

```text
main
  |
  +---- development
          |
          +---- feature development
          |
          +---- testing
          |
          +---- release
```

---

## 12. Git Workflow

The basic workflow followed in this project is:

```bash
git status
git add .
git commit -m "Meaningful commit message"
git push origin development
```

Before making major changes:

1. Check the current branch.
2. Check the working tree.
3. Implement the change.
4. Test the change.
5. Stage the required files.
6. Commit the change.
7. Push the changes to GitHub.
8. Update the related issue or project board.

---

## 13. Commit Management

Meaningful commit messages are used to describe project changes.

Examples:

```text
Add donor authentication and dashboard navigation
Add blood stock management
Add blood request management
Add donor search functionality
Add configuration management plan
Add software requirements specification
Add system architecture document
Add API documentation
Add test plan
Add change log
```

Commits provide a historical record of project development.

---

## 14. GitHub Issues

GitHub Issues are used for tracking project requirements and development tasks.

Issues created for this project include:

- Implement secure donor authentication
- Implement blood stock management
- Implement blood request management
- Implement donor search
- Create SCM project documentation

Issues help maintain traceability between requirements, implementation, and project changes.

---

## 15. GitHub Project Board

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

Project issues are moved between these columns based on their current development status.

---

## 16. Software Configuration Management

SCM activities followed in this project include:

### Configuration Identification

The following are treated as configuration items:

- Source code
- Frontend components
- Backend components
- Database models
- API routes
- Configuration files
- Documentation
- Test plans
- GitHub workflow files

### Version Control

Git is used to maintain versions of project files.

### Change Control

Changes are tracked through:

- GitHub Issues
- Git commits
- Pull requests when applicable
- GitHub Project board
- Change Log

### Status Accounting

Project status is maintained using:

- Git history
- GitHub Issues
- GitHub Projects
- Change Log
- Documentation

### Configuration Auditing

The repository is periodically checked to verify that:

- Required files are present.
- Configuration files are correctly maintained.
- Sensitive files are excluded.
- Documentation matches the implementation.
- Changes are committed and pushed.

---

## 17. Project Documentation

The `docs` directory contains the major SCM and project documents.

### Configuration Management Plan

```text
docs/Configuration_Management_Plan.md
```

Defines the SCM process, roles, configuration items, version control, change control, and release management.

### Software Requirements Specification

```text
docs/Software_Requirements_Specification.md
```

Defines system requirements, functional requirements, non-functional requirements, constraints, and acceptance criteria.

### System Architecture

```text
docs/System_Architecture.md
```

Describes the system architecture, components, database, APIs, communication, and SCM architecture.

### API Documentation

```text
docs/API_Documentation.md
```

Describes the REST API endpoints, requests, responses, validation, and API testing.

### Test Plan

```text
docs/Test_Plan.md
```

Defines the testing strategy, test cases, test environment, test execution process, and completion criteria.

### Change Log

```text
docs/Change_Log.md
```

Maintains the history of important project changes and configuration updates.

---

## 18. Testing

Testing is performed at multiple levels:

- Unit testing
- Integration testing
- Functional testing
- API testing
- UI testing
- Database testing
- Regression testing
- Validation and error handling testing

The main test cases are maintained in:

```text
docs/Test_Plan.md
```

---

## 19. Security Considerations

The project includes basic security practices such as:

- Password hashing using bcryptjs
- Environment variables for database credentials
- `.env` excluded from Git
- Input validation
- API error handling
- Passwords excluded from login responses

Future versions can introduce:

- JWT-based authentication
- Role-based access control
- Secure HTTP headers
- Rate limiting
- Improved session management
- Stronger validation

---

## 20. Current Development Status

The following major modules have been implemented:

- Project initialization
- React frontend
- Node.js backend
- MongoDB Atlas integration
- Donor registration
- Secure password hashing
- Donor login
- Donor dashboard
- Blood stock management
- Blood request management
- Donor search
- React routing
- Responsive UI improvements
- SCM documentation
- GitHub Issues
- GitHub Project board
- Git-based version control

The project is currently maintained on the `development` branch.

---

## 21. Future Enhancements

Possible future improvements include:

- JWT authentication
- Admin dashboard
- Donor availability tracking
- Email/SMS notifications
- Blood request approval workflow
- Automatic blood stock deduction
- Location-based donor search
- Blood donation history
- Appointment scheduling
- Advanced analytics dashboard
- Automated deployment
- Additional automated tests

---

## 22. Release Management

The project uses Git tags to identify stable releases.

The planned first release baseline is:

```text
v1.0.0
```

Release tags provide a fixed reference point for project versions.

---

## 23. GitHub Actions

GitHub Actions is planned for continuous integration.

The CI workflow will be used to:

- Install dependencies
- Build the frontend
- Validate the project
- Run automated checks
- Detect integration problems

The workflow will be maintained under:

```text
.github/workflows/
```

---

## 24. Repository Management

The GitHub repository contains:

```text
Source Code
Documentation
Configuration Files
Test Documentation
SCM Artifacts
GitHub Workflow Files
```

Sensitive configuration such as database credentials must not be committed to the repository.

---

## 25. Project Team

**Project:** Smart Blood Donor Management System

**Academic Area:** Software Configuration Management

**Student:** Thilak

**Program:** Integrated M.Tech Software Engineering

**Year:** 3rd Year

---

## 26. Conclusion

The Smart Blood Donor Management System demonstrates the development and management of a web-based application while applying Software Configuration Management principles.

The project uses Git and GitHub for version control, GitHub Issues for change and task tracking, GitHub Projects for progress management, structured documentation for configuration control, and GitHub Actions for continuous integration.

The combination of application development and SCM practices provides a controlled and traceable software development process.

---

## 27. Version Information

```text
Project: Smart Blood Donor Management System
SCM Baseline: Version 1.0.0
Current Development Branch: development
Repository: smart-blood-donor-management
Status: Development
```
