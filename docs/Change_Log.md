CHANGE LOG
Smart Blood Donor Management System

1. DOCUMENT INFORMATION

Project Name:
Smart Blood Donor Management System

Document Name:
Change Log

Version:
1.0

Status:
Active

Repository:
smart-blood-donor-management

Development Branch:
development

Configuration Management Tool:
Git and GitHub


2. PURPOSE

This Change Log records the major changes, enhancements, fixes, documentation updates, and configuration changes made during the development of the Smart Blood Donor Management System.

The document supports Software Configuration Management (SCM) by providing a traceable history of project changes.

Each major change is associated with a development activity, configuration item, commit, issue, or project milestone wherever applicable.


3. CHANGE LOG FORMAT

Each change entry contains:

- Change ID
- Date/Period
- Change Description
- Configuration Item
- Change Type
- Status
- SCM Reference


4. CHANGE HISTORY

CHG-001
Date/Period: Project Initialization
Change Description:
Created the Smart Blood Donor Management System project structure with separate frontend, backend, and documentation directories.

Configuration Item:
Project Structure

Change Type:
Initial Setup

Status:
Completed

SCM Reference:
Git repository initialization


CHG-002
Date/Period: Project Initialization
Change Description:
Initialized the React frontend using Vite and configured the basic frontend development environment.

Configuration Item:
Frontend

Change Type:
New Feature / Setup

Status:
Completed

SCM Reference:
Git repository


CHG-003
Date/Period: Project Initialization
Change Description:
Created the Express.js backend and configured Node.js dependencies required for server development.

Configuration Item:
Backend

Change Type:
New Feature / Setup

Status:
Completed

SCM Reference:
Git repository


CHG-004
Date/Period: Development Phase
Change Description:
Designed and implemented the SmartBlood homepage with navigation, hero section, blood stock information, emergency section, and project information.

Configuration Item:
frontend/src/App.jsx
frontend/src/App.css

Change Type:
UI Enhancement

Status:
Completed

SCM Reference:
Git commit history


CHG-005
Date/Period: Development Phase
Change Description:
Implemented donor registration functionality with fields for personal details, blood group, contact information, address, last donation date, and password.

Configuration Item:
Donor Registration Module

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #1


CHG-006
Date/Period: Development Phase
Change Description:
Created the MongoDB donor data model using Mongoose.

Configuration Item:
backend/models/Donor.js

Change Type:
Database Configuration

Status:
Completed

SCM Reference:
Git repository


CHG-007
Date/Period: Development Phase
Change Description:
Implemented donor registration API and connected the frontend registration form to the backend.

Configuration Item:
backend/routes/donorRoutes.js

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #1


CHG-008
Date/Period: Development Phase
Change Description:
Added password hashing using bcryptjs to improve password storage security.

Configuration Item:
Donor Authentication

Change Type:
Security Enhancement

Status:
Completed

SCM Reference:
GitHub Issue #1


CHG-009
Date/Period: Development Phase
Change Description:
Implemented donor login functionality with email and password validation.

Configuration Item:
backend/routes/authRoutes.js
frontend/src/pages/Login.jsx

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #1


CHG-010
Date/Period: Development Phase
Change Description:
Implemented donor dashboard functionality and local login-session handling using localStorage.

Configuration Item:
Donor Dashboard

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #1


CHG-011
Date/Period: Development Phase
Change Description:
Added React Router and configured routes for Home, Donor Registration, Login, Blood Stock, Blood Request, Find Donors, and Dashboard.

Configuration Item:
Frontend Routing

Change Type:
Configuration

Status:
Completed

SCM Reference:
Git repository


CHG-012
Date/Period: Development Phase
Change Description:
Implemented blood stock management using MongoDB and REST APIs.

Configuration Item:
Blood Stock Module

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #2


CHG-013
Date/Period: Development Phase
Change Description:
Added blood stock records for all eight blood groups and implemented frontend display and update functionality.

Configuration Item:
Blood Stock Module

Change Type:
Data / UI Enhancement

Status:
Completed

SCM Reference:
GitHub Issue #2


CHG-014
Date/Period: Development Phase
Change Description:
Implemented blood request management with patient information, blood group, required units, hospital, city, urgency, and request status.

Configuration Item:
Blood Request Module

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #3


CHG-015
Date/Period: Development Phase
Change Description:
Created blood request database model and REST API endpoints for creating and retrieving blood requests.

Configuration Item:
backend/models/BloodRequest.js
backend/routes/bloodRequestRoutes.js

Change Type:
Database / API Enhancement

Status:
Completed

SCM Reference:
GitHub Issue #3


CHG-016
Date/Period: Development Phase
Change Description:
Implemented donor search based on blood group and optional city filtering.

Configuration Item:
Find Donors Module

Change Type:
New Feature

Status:
Completed

SCM Reference:
GitHub Issue #4


CHG-017
Date/Period: Development Phase
Change Description:
Added API endpoint for retrieving compatible donors using blood group and city filters.

Configuration Item:
backend/routes/donorRoutes.js

Change Type:
API Enhancement

Status:
Completed

SCM Reference:
GitHub Issue #4


CHG-018
Date/Period: Development Phase
Change Description:
Connected the backend to MongoDB Atlas and configured environment variables using the .env file.

Configuration Item:
Database Configuration

Change Type:
Environment Configuration

Status:
Completed

SCM Reference:
MongoDB Atlas / .env


CHG-019
Date/Period: SCM Implementation
Change Description:
Created the development branch to separate ongoing development work from the main branch.

Configuration Item:
Git Branch Strategy

Change Type:
SCM Configuration

Status:
Completed

SCM Reference:
Git branch: development


CHG-020
Date/Period: SCM Implementation
Change Description:
Created GitHub Issue #1 for secure donor authentication implementation.

Configuration Item:
GitHub Issues

Change Type:
SCM Tracking

Status:
Completed

SCM Reference:
GitHub Issue #1


CHG-021
Date/Period: SCM Implementation
Change Description:
Created GitHub Issues #2 to #5 for blood stock management, blood request management, donor search, and project documentation.

Configuration Item:
GitHub Issues

Change Type:
SCM Tracking

Status:
Completed

SCM Reference:
GitHub Issues #2-#5


CHG-022
Date/Period: SCM Implementation
Change Description:
Created a GitHub Project board named Smart Blood Donor Management - SCM with To Do, In Progress, and Done columns.

Configuration Item:
GitHub Projects

Change Type:
SCM Configuration

Status:
Completed

SCM Reference:
GitHub Project Board


CHG-023
Date/Period: SCM Documentation
Change Description:
Created the Configuration Management Plan documenting the SCM strategy, repository structure, branching, configuration control, testing, release management, and related SCM activities.

Configuration Item:
docs/Configuration_Management_Plan.md

Change Type:
Documentation

Status:
Completed

SCM Reference:
Git commit: Add configuration management plan


CHG-024
Date/Period: SCM Documentation
Change Description:
Created the Software Requirements Specification containing functional, non-functional, system, database, API, security, and acceptance requirements.

Configuration Item:
docs/Software_Requirements_Specification.md

Change Type:
Documentation

Status:
Completed

SCM Reference:
Git commit: Add software requirements specification


CHG-025
Date/Period: SCM Documentation
Change Description:
Created the System Architecture document describing frontend, backend, database, API, authentication, data flow, security, deployment, and SCM architecture.

Configuration Item:
docs/System_Architecture.md

Change Type:
Documentation

Status:
Completed

SCM Reference:
Git commit: Add system architecture document


CHG-026
Date/Period: SCM Documentation
Change Description:
Created API Documentation covering all implemented REST API endpoints, request formats, response formats, validation, and API testing.

Configuration Item:
docs/API_Documentation.md

Change Type:
Documentation

Status:
Completed

SCM Reference:
Git commit: Add API documentation


CHG-027
Date/Period: SCM Documentation
Change Description:
Created the Test Plan covering test objectives, scope, test environment, test cases, API testing, functional testing, database testing, security validation, defect management, and SCM integration.

Configuration Item:
docs/Test_Plan.md

Change Type:
Documentation

Status:
Completed

SCM Reference:
Git commit: Add test plan


CHG-028
Date/Period: SCM Documentation
Change Description:
Created the Change Log to maintain traceability of major project changes and SCM activities.

Configuration Item:
docs/Change_Log.md

Change Type:
Documentation

Status:
Completed

SCM Reference:
Current SCM activity


5. MAJOR CONFIGURATION ITEMS

The following configuration items are maintained under version control:

1. Frontend source code
2. Backend source code
3. Database models
4. REST API routes
5. React pages and components
6. CSS files
7. Configuration files
8. Documentation files
9. Git configuration and branch history
10. GitHub Issues
11. GitHub Project board
12. GitHub Actions workflow files
13. Release tags


6. CHANGE MANAGEMENT PROCESS

The project follows the following change management process:

1. Identify the required change.
2. Create or update a GitHub Issue when appropriate.
3. Implement the change in the development branch.
4. Test the change locally.
5. Review the modified configuration items.
6. Commit the change using a meaningful Git commit message.
7. Push the commit to the GitHub development branch.
8. Update relevant documentation.
9. Update the GitHub Issue and Project board.
10. Merge stable changes to the main branch when approved.


7. VERSION CONTROL POLICY

Git is used as the version control system for the project.

The main branch represents the stable project version.

The development branch is used for ongoing implementation and testing.

Meaningful commit messages are used to describe project changes.

Sensitive configuration files such as .env are excluded from version control.


8. TRACEABILITY

Changes are traceable through:

- Git commits
- Git branches
- GitHub Issues
- GitHub Project board
- Documentation change history
- GitHub Actions workflow history
- Release tags


9. FUTURE CHANGE ENTRIES

Future changes shall be added using the following format:

Change ID:
Date/Period:
Change Description:
Configuration Item:
Change Type:
Status:
SCM Reference:


10. DOCUMENT CONTROL

Document Name:
Change Log

Current Version:
1.0

Status:
Active

Maintained By:
Project Development Team

Version Control:
Git and GitHub

Branch:
development


11. CONCLUSION

The Change Log provides a centralized record of significant modifications made to the Smart Blood Donor Management System.

It supports configuration identification, change tracking, traceability, accountability, and project auditing as part of the Software Configuration Management process.

The document will be updated whenever a significant project configuration item is added, modified, removed, or released.
