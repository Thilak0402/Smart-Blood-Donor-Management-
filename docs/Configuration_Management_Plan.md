CONFIGURATION MANAGEMENT PLAN

SMART BLOOD DONOR MANAGEMENT SYSTEM

Project Name: Smart Blood Donor Management System
Project Type: Academic Software Configuration Management Project
Version: 1.0
Date: September 2026
Development Environment: Visual Studio Code
Version Control: Git
Repository Hosting: GitHub


1. INTRODUCTION

The Smart Blood Donor Management System is a web-based application designed to help manage blood donors, blood availability, blood requests, and donor searching.

The system provides a platform where donors can register and log in, users can search for donors, blood stock can be maintained, and blood requests can be submitted.

This Configuration Management Plan defines the procedures used to identify, control, track, maintain, and manage the software configuration items throughout the development of the project.

The plan ensures that changes to source code, documentation, configuration files, database models, and other project artifacts are properly controlled using Software Configuration Management practices.


2. PURPOSE

The purpose of this Configuration Management Plan is to establish a systematic process for managing changes to the Smart Blood Donor Management System.

The plan helps the development team to:

- Maintain different versions of the software.
- Track changes made to project files.
- Prevent accidental loss of source code.
- Maintain a history of project development.
- Control software configuration items.
- Track issues and change requests.
- Manage development branches.
- Maintain stable versions of the application.
- Provide traceability between requirements, issues, commits, and releases.
- Support collaboration among project team members.


3. OBJECTIVES

The main objectives of configuration management for this project are:

1. Identify all important configuration items.
2. Maintain the project using Git version control.
3. Store the project repository on GitHub.
4. Use branches to separate stable and development code.
5. Track project changes using GitHub Issues.
6. Manage project tasks using GitHub Projects.
7. Maintain meaningful commit history.
8. Protect sensitive configuration information.
9. Test changes before integrating them into stable versions.
10. Maintain release versions using Git tags.
11. Maintain proper project documentation.
12. Provide a mechanism for recovering previous versions of the project.


4. PROJECT OVERVIEW

The Smart Blood Donor Management System contains the following major modules:

- Donor Registration
- Donor Login
- Donor Dashboard
- Donor Search
- Blood Stock Management
- Blood Request Management
- Database Management
- Backend REST APIs
- Frontend User Interface

The application follows a frontend-backend architecture.

The frontend is developed using React and Vite.

The backend is developed using Node.js and Express.js.

MongoDB is used as the database, with Mongoose used for database interaction.


5. TECHNOLOGY STACK

5.1 FRONTEND

The frontend uses:

- React
- Vite
- JavaScript
- React Router
- CSS
- HTML

5.2 BACKEND

The backend uses:

- Node.js
- Express.js
- Mongoose
- bcryptjs
- CORS
- dotenv

5.3 DATABASE

The project uses:

- MongoDB
- MongoDB Atlas
- Mongoose

5.4 SOFTWARE CONFIGURATION MANAGEMENT TOOLS

The following SCM tools are used:

- Git
- GitHub
- GitHub Issues
- GitHub Projects
- GitHub Actions
- Visual Studio Code


6. CONFIGURATION ITEMS

Configuration Items (CIs) are the important software artifacts that must be identified and controlled during development.

The following configuration items are maintained in this project:

ID: CI-01
Configuration Item: Frontend Source Code
Description: React-based frontend application

ID: CI-02
Configuration Item: Backend Source Code
Description: Node.js and Express backend

ID: CI-03
Configuration Item: Database Models
Description: MongoDB/Mongoose data models

ID: CI-04
Configuration Item: API Routes
Description: Backend REST API endpoints

ID: CI-05
Configuration Item: Frontend Pages
Description: React pages and components

ID: CI-06
Configuration Item: Configuration Files
Description: Package and project configuration files

ID: CI-07
Configuration Item: Documentation
Description: SCM and project documentation

ID: CI-08
Configuration Item: Test Cases
Description: Software testing artifacts

ID: CI-09
Configuration Item: Git Repository
Description: Complete version-controlled project

ID: CI-10
Configuration Item: Release Versions
Description: Stable versions identified using Git tags


7. REPOSITORY STRUCTURE

The project repository follows the structure below:

Smart Blood Donor Management
|
|-- frontend
|   |-- src
|   |   |-- pages
|   |   |   |-- DonorRegistration.jsx
|   |   |   |-- DonorRegistration.css
|   |   |   |-- Login.jsx
|   |   |   |-- Login.css
|   |   |   |-- BloodStock.jsx
|   |   |   |-- BloodStock.css
|   |   |   |-- BloodRequest.jsx
|   |   |   |-- BloodRequest.css
|   |   |   |-- FindDonors.jsx
|   |   |   |-- FindDonors.css
|   |   |   |-- DonorDashboard.jsx
|   |   |   |-- DonorDashboard.css
|   |   |
|   |   |-- App.jsx
|   |   |-- App.css
|   |   |-- main.jsx
|   |
|   |-- package.json
|
|-- backend
|   |-- models
|   |   |-- Donor.js
|   |   |-- BloodStock.js
|   |   |-- BloodRequest.js
|   |
|   |-- routes
|   |   |-- donorRoutes.js
|   |   |-- authRoutes.js
|   |   |-- bloodStockRoutes.js
|   |   |-- bloodRequestRoutes.js
|   |
|   |-- .env
|   |-- .gitignore
|   |-- package.json
|   |-- server.js
|
|-- docs
|   |-- Configuration_Management_Plan.md
|
|-- README.md

The .env file contains sensitive configuration information and is excluded from Git tracking.


8. VERSION CONTROL SYSTEM

Git is used as the distributed version control system for this project.

Git maintains the complete history of changes made to the source code and project files.

GitHub is used as the remote repository for storing the project and collaborating with team members.

The repository is named:

smart-blood-donor-management


9. GIT REPOSITORY MANAGEMENT

The project repository is initialized using Git and connected to GitHub.

The repository contains the complete source code and documentation.

Basic Git operations used in the project include:

git status

git add .

git commit -m "Commit message"

git push

git pull

git branch

git checkout

These commands are used to manage project versions and changes.


10. BRANCHING STRATEGY

A branch-based development strategy is used to manage different versions of the project.

10.1 MAIN BRANCH

The main branch contains the stable version of the application.

Only tested and verified changes should be merged into the main branch.

10.2 DEVELOPMENT BRANCH

The development branch is used for ongoing development and integration of new features.

Current development branch:

development

10.3 FEATURE BRANCHES

Separate feature branches can be created when developing major new features.

Examples:

feature/donor-registration
feature/authentication
feature/blood-stock
feature/blood-request
feature/donor-search
feature/dashboard

The general workflow is:

Feature Branch
      |
      v
Development Branch
      |
      v
Testing
      |
      v
Main Branch

This approach helps prevent unstable changes from being directly introduced into the stable branch.


11. COMMIT MANAGEMENT

Each significant change to the project is recorded as a Git commit.

Commit messages should be clear, concise, and related to the actual change.

Examples of meaningful commit messages include:

Initial project setup

Add React frontend setup and homepage

Add donor registration module

Add MongoDB donor registration and authentication

Add blood stock management API

Add blood stock frontend page

Add blood request management

Add donor search and dashboard

Add configuration management plan

Meaningful commit messages make it easier to understand the history of the project.


12. CHANGE MANAGEMENT

Changes to the software are tracked using GitHub Issues.

A GitHub Issue can represent:

- A new feature
- A bug
- A change request
- A documentation task
- An improvement
- A testing requirement

Each issue can be assigned, discussed, implemented, tested, and closed.

The current project issues include:

Issue #1 - Implement secure donor authentication - Completed

Issue #2 - Implement blood stock management - Completed

Issue #3 - Implement blood request management - Completed

Issue #4 - Implement donor search - Completed

Issue #5 - Create SCM project documentation - In Progress

Issues provide traceability between project requirements and development activities.


13. GITHUB PROJECT MANAGEMENT

GitHub Projects is used to manage the project tasks.

The project board is named:

Smart Blood Donor Management - SCM

The project board contains the following workflow:

To Do
   |
   v
In Progress
   |
   v
Done

Current project status:

TO DO

Issue #5 - Create SCM project documentation

IN PROGRESS

None

DONE

Issue #1 - Implement secure donor authentication
Issue #2 - Implement blood stock management
Issue #3 - Implement blood request management
Issue #4 - Implement donor search

The project board provides a visual representation of project progress.


14. CONFIGURATION CONTROL

Configuration control ensures that changes to important project artifacts are properly managed.

The following procedures are used:

1. Identify the configuration item.
2. Create or update a GitHub Issue when necessary.
3. Implement the required change.
4. Commit the change using Git.
5. Test the change.
6. Push the changes to GitHub.
7. Review the changes.
8. Merge the changes into the appropriate branch.
9. Update the GitHub Project status.
10. Create a release tag when the change becomes part of a stable release.


15. ENVIRONMENT CONFIGURATION

Sensitive environment-specific configuration is stored in the backend .env file.

Example:

PORT=5000
MONGO_URI=<database-connection-string>

The actual database connection string must not be committed to GitHub.

The .gitignore file contains:

node_modules/
.env

This prevents sensitive information and installed dependencies from being uploaded to the repository.


16. DEPENDENCY MANAGEMENT

The project uses npm for dependency management.

Frontend dependencies are maintained in:

frontend/package.json

Backend dependencies are maintained in:

backend/package.json

Dependencies are installed using:

npm install

Development dependencies can be installed using:

npm install --save-dev <package-name>

The package files are tracked using Git so that the required project dependencies can be reproduced.


17. BUILD AND EXECUTION MANAGEMENT

The frontend application is executed using:

npm run dev

The backend development server is executed using:

npm run dev

The frontend runs on:

http://localhost:5173

The backend runs on:

http://localhost:5000

The backend communicates with MongoDB through the configured MongoDB connection.


18. TESTING AND VERIFICATION

Each major module is tested before being considered complete.

The following functionality has been tested:

18.1 DONOR REGISTRATION

The donor registration form collects:

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

The information is sent to the backend and stored in MongoDB.

18.2 DONOR LOGIN

The login module verifies:

- Email
- Password

Passwords are handled using bcrypt-based password comparison.

18.3 DONOR DASHBOARD

The dashboard displays donor information after successful login.

The dashboard provides quick access to:

- Blood Stock
- Find Donors
- Request Blood

Logout functionality is also provided.

18.4 BLOOD STOCK MANAGEMENT

The blood stock module supports all eight blood groups:

A+
A-
B+
B-
AB+
AB-
O+
O-

The system allows available blood units to be updated and displayed.

18.5 BLOOD REQUEST MANAGEMENT

The blood request module accepts:

- Patient name
- Phone number
- Blood group
- Units required
- Hospital
- City
- Urgency

Blood requests are stored in MongoDB.

18.6 DONOR SEARCH

The donor search module supports searching based on:

- Blood group
- City

The system displays matching donor information.


19. RELEASE MANAGEMENT

Stable versions of the application will be identified using Git tags.

Example release tags:

v1.0.0
v1.1.0
v1.2.0

The initial stable release will be identified as:

v1.0.0

Release tags provide a permanent reference to a specific version of the project.


20. BACKUP AND RECOVERY

GitHub provides a remote backup of the project source code.

The local project can be restored from GitHub by cloning the repository.

Example:

git clone <repository-url>

Git history allows developers to inspect previous versions of project files.

Previous commits can also be used to identify when a particular change was introduced.


21. CONFIGURATION STATUS ACCOUNTING

Configuration status accounting is performed using:

- Git commit history
- Git branches
- GitHub Issues
- GitHub Projects
- Git tags
- GitHub releases
- Project documentation

These mechanisms provide information about:

- What changed
- When the change occurred
- Who made the change
- Which issue was associated with the change
- Which version contains the change
- Whether the change is completed


22. CONFIGURATION AUDITING

Configuration audits are performed to ensure that the project follows the defined configuration management procedures.

The following items are checked:

- Source code is stored in Git.
- Changes have meaningful commit messages.
- Correct branches are used.
- Issues are tracked using GitHub Issues.
- Project tasks are updated in GitHub Projects.
- Sensitive credentials are not committed.
- Documentation is maintained.
- Tests are performed before stable releases.
- Release versions are properly tagged.


23. SECURITY AND ACCESS CONTROL

The GitHub repository is used to manage source code access.

Sensitive information such as:

- Database passwords
- Database connection strings
- API keys
- Authentication secrets

must not be stored directly in source code.

Sensitive information should be stored using environment variables or appropriate secret-management mechanisms.

The .env file is excluded from version control.


24. ROLES AND RESPONSIBILITIES

The following responsibilities are defined for the project:

Developer:
Develop and modify software modules.

Configuration Manager:
Manage versions, branches and configuration items.

Tester:
Test implemented functionality.

Project Team:
Review requirements and changes.

Repository Administrator:
Maintain GitHub repository and access.

For an academic project, multiple responsibilities may be handled by the same project member.


25. GITHUB ACTIONS

GitHub Actions can be used to automate software development activities.

Potential automation activities include:

- Installing dependencies
- Running lint checks
- Running automated tests
- Building the frontend
- Verifying the backend
- Checking code quality

A future GitHub Actions workflow can automatically verify the project whenever code is pushed to GitHub.


26. TRACEABILITY

Traceability is maintained between different project artifacts.

The relationship can be represented as:

Requirement
     |
     v
GitHub Issue
     |
     v
Development Branch
     |
     v
Git Commit
     |
     v
Testing
     |
     v
Merge
     |
     v
Release Tag

This allows the development team to identify the complete history of a software change.


27. CONFIGURATION MANAGEMENT WORKFLOW

The overall configuration management workflow is:

Identify Requirement
        |
        v
Create GitHub Issue
        |
        v
Create Feature Branch
        |
        v
Develop Feature
        |
        v
Commit Changes
        |
        v
Push to GitHub
        |
        v
Test Feature
        |
        v
Merge with Development
        |
        v
Final Testing
        |
        v
Merge with Main
        |
        v
Create Release Tag

This workflow provides controlled development and version management.


28. CURRENT PROJECT VERSION HISTORY

The project has been developed through multiple controlled commits.

Important development milestones include:

Commit: 847a80d
Description: Initial project setup

Commit: 76b09b3
Description: Add React frontend setup and homepage

Commit: a4948c9
Description: Add donor registration module

Additional commits have been created for:

- Authentication
- Blood stock management
- Blood request management
- Donor search
- Dashboard
- SCM documentation

The Git repository maintains the complete history of these changes.


29. MAINTENANCE

After the initial development phase, maintenance activities will include:

- Fixing defects
- Updating dependencies
- Improving security
- Adding new features
- Updating documentation
- Updating configuration items
- Maintaining database functionality
- Improving testing coverage

All significant maintenance changes should be tracked using GitHub Issues and Git commits.


30. FUTURE SCM IMPROVEMENTS

The following SCM improvements can be implemented in future development:

1. Feature branch workflow.
2. Pull request-based code review.
3. Automated testing using GitHub Actions.
4. Automated frontend build verification.
5. Automated backend testing.
6. Release management using GitHub Releases.
7. Semantic versioning.
8. Improved configuration auditing.
9. Automated deployment.
10. Test coverage reporting.


31. CONCLUSION

The Configuration Management Plan establishes a structured approach for managing the Smart Blood Donor Management System.

Git and GitHub provide version control and source-code management.

GitHub Issues provide change and issue tracking.

GitHub Projects provide task and workflow management.

Git branches provide controlled development environments.

Git commits maintain a detailed history of software changes.

Git tags provide identification of stable software versions.

Environment configuration and sensitive information are separated from the source code.

Together, these Software Configuration Management practices provide version control, traceability, change management, configuration control, and release management throughout the development lifecycle of the Smart Blood Donor Management System.


DOCUMENT CONTROL

Document Name: Configuration Management Plan
Project: Smart Blood Donor Management System
Version: 1.0
Status: Draft
Prepared By: Thilak
Date: September 2026
Repository: smart-blood-donor-management
Version Control: Git and GitHub
Document Location: /docs/Configuration_Management_Plan.md
