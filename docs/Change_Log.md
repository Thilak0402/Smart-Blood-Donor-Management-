CHANGE LOG
Smart Blood Donor Management System
Software Configuration Management Project

============================================================
1. DOCUMENT INFORMATION
============================================================

Project Name:
Smart Blood Donor Management System

Project Type:
Software Configuration Management (SCM) Project

Technology:
React, Vite, Node.js, Express.js, MongoDB, Mongoose

Version:
1.0.0 - Development Baseline

Branch:
development

Repository:
smart-blood-donor-management

============================================================
2. PURPOSE
============================================================

This Change Log records the major changes, enhancements,
documentation updates, configuration changes, and SCM
activities performed during the development of the Smart
Blood Donor Management System.

The Change Log provides traceability between project
requirements, implementation activities, documentation,
and Git/GitHub configuration management activities.

============================================================
3. CHANGE HISTORY
============================================================

CHG-001
Date: Initial Project Setup
Category: Project Initialization
Description:
Created the Smart Blood Donor Management System project
structure with separate frontend, backend, and documentation
directories.

Files/Components:
- frontend/
- backend/
- docs/
- README.md

SCM Activity:
Initialized Git repository and connected the project to
GitHub.

Status:
Completed


CHG-002
Date: Initial Frontend Development
Category: Frontend
Description:
Created the React/Vite frontend application and developed
the initial SmartBlood homepage.

Major Features:
- SmartBlood navigation
- Home page
- Find Donors section
- Blood Stock section
- Request Blood section
- Login navigation
- Donor registration navigation
- Emergency donor section
- Footer

SCM Activity:
Frontend changes committed and pushed to GitHub.

Status:
Completed


CHG-003
Date: Donor Registration
Category: Feature Development
Description:
Implemented donor registration functionality.

Features:
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

Backend:
Created donor model and registration API.

Security:
Passwords are hashed using bcryptjs before storage.

Status:
Completed


CHG-004
Date: MongoDB Integration
Category: Database
Description:
Integrated MongoDB Atlas with the backend application.

Major Activities:
- Created SmartBloodDB database deployment
- Configured database user
- Configured IP access
- Added MongoDB connection string to .env
- Connected backend using Mongoose

SCM Security:
.env is excluded from Git using .gitignore.

Status:
Completed


CHG-005
Date: Donor Authentication
Category: Security / Authentication
Description:
Implemented donor login functionality.

Features:
- Email and password login
- Password verification using bcryptjs
- Invalid login handling
- Donor information returned after successful login

API:
POST /api/auth/login

Status:
Completed


CHG-006
Date: Donor Dashboard
Category: Feature Development
Description:
Implemented donor dashboard functionality.

Features:
- Display donor name
- Display donor email
- Display blood group
- Display city
- Quick navigation
- Logout functionality

Authentication State:
Donor information is stored in browser localStorage.

Status:
Completed


CHG-007
Date: React Routing
Category: Frontend Architecture
Description:
Integrated React Router into the frontend.

Routes:
- /
- /register
- /login
- /blood-stock
- /request-blood
- /find-donors
- /dashboard

Status:
Completed


CHG-008
Date: Blood Stock Management
Category: Feature Development
Description:
Implemented blood stock management.

Features:
- View available blood groups
- Display units available
- Update blood stock
- Refresh stock after update
- Support for all eight blood groups

Supported Blood Groups:
A+, A-, B+, B-, AB+, AB-, O+, O-

API:
GET /api/blood-stock
POST /api/blood-stock

Status:
Completed


CHG-009
Date: Blood Request Management
Category: Feature Development
Description:
Implemented blood request functionality.

Request Information:
- Patient name
- Phone number
- Blood group
- Units required
- Hospital
- City
- Urgency
- Request status

API:
POST /api/blood-requests
GET /api/blood-requests

Status:
Completed


CHG-010
Date: Donor Search
Category: Feature Development
Description:
Implemented donor search functionality.

Search Criteria:
- Blood group
- City

API:
GET /api/donors

Status:
Completed


CHG-011
Date: Development Branch
Category: SCM
Description:
Created the development branch for controlled feature
development.

Branch:
development

SCM Activity:
Development branch pushed to GitHub and used for subsequent
project changes.

Status:
Completed


CHG-012
Date: GitHub Issues
Category: SCM
Description:
Created GitHub Issues to track project requirements and
development activities.

Issues Created:
- Issue #1 - Implement secure donor authentication
- Issue #2 - Implement blood stock management
- Issue #3 - Implement blood request management
- Issue #4 - Implement donor search
- Issue #5 - Create SCM project documentation

Status:
Completed


CHG-013
Date: GitHub Project Board
Category: SCM
Description:
Created a GitHub Project board for managing project tasks.

Project Board:
Smart Blood Donor Management - SCM

Columns:
- To Do
- In Progress
- Done

Status:
Completed


CHG-014
Date: Configuration Management Plan
Category: Documentation
Description:
Created the Configuration Management Plan describing the
SCM process, repository structure, branching strategy,
configuration control, version management, status accounting,
auditing, security, and release management.

File:
docs/Configuration_Management_Plan.md

Status:
Completed


CHG-015
Date: Software Requirements Specification
Category: Documentation
Description:
Created the Software Requirements Specification documenting
the system purpose, scope, users, functional requirements,
non-functional requirements, database requirements, API
requirements, security requirements, and acceptance criteria.

File:
docs/Software_Requirements_Specification.md

Status:
Completed


CHG-016
Date: System Architecture
Category: Documentation
Description:
Created the System Architecture document describing the
frontend, backend, API, database, authentication, data flow,
deployment, and SCM architecture.

File:
docs/System_Architecture.md

Status:
Completed


CHG-017
Date: API Documentation
Category: Documentation
Description:
Created API documentation for the major backend endpoints.

Documented APIs:
- Donor registration
- Donor login
- Donor search
- Blood stock
- Blood requests

File:
docs/API_Documentation.md

Status:
Completed


CHG-018
Date: Test Plan
Category: Testing Documentation
Description:
Created the Test Plan covering unit testing, integration
testing, functional testing, API testing, UI testing,
database testing, regression testing, validation, security,
defect management, and test completion criteria.

File:
docs/Test_Plan.md

Status:
Completed


CHG-019
Date: Authentication and Login UI Enhancement
Category: User Interface
Description:
Improved the Donor Login page layout.

Enhancements:
- Added centered login card
- Added blood drop icon
- Improved spacing
- Improved form alignment
- Improved input styling
- Improved login button styling
- Added responsive layout
- Added Back to Home navigation

Files:
- frontend/src/pages/Login.jsx
- frontend/src/pages/Login.css

Status:
Completed


CHG-020
Date: Donor Registration UI Enhancement
Category: User Interface
Description:
Improved the Donor Registration page layout.

Enhancements:
- Added centered registration card
- Improved field alignment
- Added consistent spacing
- Improved labels and inputs
- Improved dropdown styling
- Improved address field
- Improved password field
- Added responsive layout
- Added Login navigation

Files:
- frontend/src/pages/DonorRegistration.jsx
- frontend/src/pages/DonorRegistration.css

Status:
Completed


CHG-021
Date: Blood Stock UI Enhancement
Category: User Interface
Description:
Improved the Blood Stock Management page.

Enhancements:
- Added blood stock header
- Added blood icon
- Added structured update stock section
- Improved input alignment
- Improved update button
- Added blood group cards
- Added stock availability indicators
- Added low stock indicator
- Added out-of-stock indicator
- Improved responsive layout

Files:
- frontend/src/pages/BloodStock.jsx
- frontend/src/pages/BloodStock.css

Status:
Completed


CHG-022
Date: Login Navigation Enhancement
Category: Navigation
Description:
Added a Back to Home option to the Donor Login page so
users can return to the SmartBlood homepage without logging in.

File:
frontend/src/pages/Login.jsx

Status:
Completed


CHG-023
Date: SCM Change Tracking
Category: SCM
Description:
Recorded the major project changes in this Change Log to
provide configuration and change traceability.

File:
docs/Change_Log.md

Status:
Completed


============================================================
4. GIT COMMIT AND VERSION CONTROL PRACTICES
============================================================

Git was used to maintain version history throughout the
project.

Major SCM activities included:

- Git repository initialization
- Remote GitHub repository configuration
- Development branch creation
- Feature development
- Git commits
- Git pushes
- GitHub Issues
- GitHub Projects
- Documentation version control
- UI change tracking

Commit messages were written to describe the purpose of
individual changes.

Examples of commit messages used:

- Add donor authentication and dashboard navigation
- Add configuration management plan
- Add software requirements specification
- Add system architecture document
- Add API documentation
- Add test plan
- Improve authentication and blood stock page UI

============================================================
5. CONFIGURATION ITEMS AFFECTED
============================================================

The following configuration items were modified during
development:

Frontend:
- frontend/src/App.jsx
- frontend/src/pages/Login.jsx
- frontend/src/pages/Login.css
- frontend/src/pages/DonorRegistration.jsx
- frontend/src/pages/DonorRegistration.css
- frontend/src/pages/BloodStock.jsx
- frontend/src/pages/BloodStock.css
- frontend/src/pages/BloodRequest.jsx
- frontend/src/pages/BloodRequest.css
- frontend/src/pages/FindDonors.jsx
- frontend/src/pages/FindDonors.css
- frontend/src/pages/DonorDashboard.jsx
- frontend/src/pages/DonorDashboard.css

Backend:
- backend/server.js
- backend/models/Donor.js
- backend/models/BloodStock.js
- backend/models/BloodRequest.js
- backend/routes/donorRoutes.js
- backend/routes/authRoutes.js
- backend/routes/bloodStockRoutes.js
- backend/routes/bloodRequestRoutes.js

Documentation:
- docs/Configuration_Management_Plan.md
- docs/Software_Requirements_Specification.md
- docs/System_Architecture.md
- docs/API_Documentation.md
- docs/Test_Plan.md
- docs/Change_Log.md

Configuration:
- backend/.env
- backend/.gitignore

============================================================
6. CURRENT PROJECT STATUS
============================================================

The following major modules are implemented:

1. SmartBlood homepage
2. Donor registration
3. Donor login
4. Donor dashboard
5. Logout
6. Blood stock management
7. Blood request management
8. Donor search
9. MongoDB database integration
10. Git/GitHub SCM
11. GitHub Issues
12. GitHub Project board
13. SCM documentation
14. Test Plan
15. UI enhancements

Current development branch:
development

Current project stage:
Functional development and SCM documentation

============================================================
7. PENDING / FUTURE CHANGES
============================================================

Potential future enhancements include:

- JWT-based authentication
- Role-based access control
- Admin dashboard
- Password reset
- Email/SMS notifications
- Real-time blood stock updates
- Advanced donor filtering
- Blood request approval workflow
- Automated unit and API testing
- GitHub Actions CI/CD
- Production deployment
- Improved database security
- Automated database backup
- Release versioning

============================================================
8. CHANGE CONTROL
============================================================

All significant project changes should follow the SCM
workflow:

1. Identify the required change.
2. Create or update a GitHub Issue when appropriate.
3. Implement the change in the development branch.
4. Test the change locally.
5. Review modified files.
6. Commit the change with a meaningful commit message.
7. Push the changes to GitHub.
8. Update project documentation when required.
9. Update the GitHub Project board.
10. Include the change in this Change Log.

============================================================
9. DOCUMENT CONTROL
============================================================

Document:
Change Log

File:
docs/Change_Log.md

Version:
1.0.0

Status:
Active

Purpose:
Track project changes and maintain SCM traceability.

============================================================
10. CONCLUSION
============================================================

This Change Log provides a chronological record of the major
changes made to the Smart Blood Donor Management System.

It supports Software Configuration Management by maintaining
traceability between implementation changes, documentation,
Git commits, GitHub Issues, project tasks, and configuration
items.

Future changes to the project should be recorded using the
same change control and version management practices.
