TEST PLAN
Smart Blood Donor Management System

1. DOCUMENT INFORMATION

Project Name: Smart Blood Donor Management System
Document Name: Test Plan
Version: 1.0
Status: Active
Date: 2026-09-24

Testing Approach:
Functional Testing, Integration Testing, API Testing, UI Testing, Authentication Testing, Database Testing, and Regression Testing


2. INTRODUCTION

The Smart Blood Donor Management System is a web-based application developed to manage blood donors, blood stock, and blood requests.

This Test Plan defines the testing activities required to verify that the system works according to its requirements.

The testing process is also integrated with the Software Configuration Management process using Git, GitHub Issues, GitHub Projects, and Git branches.


3. TESTING OBJECTIVES

The main objectives are:

- Verify that all implemented features work correctly.
- Verify that donor registration works correctly.
- Verify that donor login and logout work correctly.
- Verify that donor information is stored correctly.
- Verify that blood stock can be viewed and updated.
- Verify that blood requests can be created and retrieved.
- Verify that donors can be searched using blood group and city.
- Verify API responses and HTTP status codes.
- Verify frontend and backend integration.
- Verify database operations.
- Identify and document defects.
- Ensure that fixes do not break existing functionality.
- Maintain traceability between requirements, code, testing, and SCM records.


4. SCOPE OF TESTING

The following modules are included:

1. Homepage
2. Donor Registration
3. Donor Login
4. Donor Dashboard
5. Logout
6. Blood Stock Management
7. Blood Request Management
8. Donor Search
9. Backend REST APIs
10. MongoDB database integration
11. Input validation
12. Error handling


5. OUT OF SCOPE

The following features are not part of the current implementation:

- Online payment processing
- SMS gateway integration
- Email notification service
- Real-time emergency alerts
- JWT authentication
- Admin role management
- Production deployment
- Mobile application
- External hospital system integration


6. TEST ENVIRONMENT

Frontend:
React
Vite
React Router
JavaScript

Backend:
Node.js
Express.js
Mongoose

Database:
MongoDB Atlas

Development Tools:
Visual Studio Code
Git
GitHub
GitHub Issues
GitHub Projects
GitHub Actions

Frontend URL:
http://localhost:5173

Backend URL:
http://localhost:5000


7. TESTING TYPES

7.1 UNIT TESTING

Unit testing verifies individual functions or small components independently.

Examples:

- Donor validation
- Blood group validation
- Password validation
- Blood stock validation
- Blood request validation


7.2 INTEGRATION TESTING

Integration testing verifies communication between different system components.

Examples:

- React frontend to Express backend
- Express backend to MongoDB
- Login page to authentication API
- Blood stock page to blood stock API
- Blood request page to blood request API
- Find Donors page to donor search API


7.3 FUNCTIONAL TESTING

Functional testing verifies that each system feature behaves according to its requirements.

The following are tested:

- Donor registration
- Login
- Logout
- Dashboard
- Blood stock
- Blood requests
- Donor search


7.4 API TESTING

REST APIs are tested using the application and API testing tools.

The following endpoints are tested:

POST /api/donors/register
POST /api/auth/login
GET /api/donors
GET /api/blood-stock
POST /api/blood-stock
POST /api/blood-requests
GET /api/blood-requests


7.5 UI TESTING

UI testing verifies:

- Page navigation
- Forms
- Buttons
- Input fields
- Error messages
- Success messages
- Responsive layout
- Dashboard display


7.6 DATABASE TESTING

Database testing verifies:

- Donor records are stored correctly.
- Passwords are stored in hashed form.
- Duplicate donor emails are prevented.
- Blood stock records are created or updated correctly.
- Blood requests are stored correctly.
- Required fields are enforced.


7.7 REGRESSION TESTING

Regression testing is performed after changes to verify that existing functionality continues to work.

For example, after modifying authentication, the following should be retested:

- Registration
- Login
- Dashboard
- Logout
- Homepage navigation


8. TEST DATA

Sample donor data:

Full Name: Test Donor
Email: testdonor@example.com
Phone: 9876543210
Date of Birth: 2003-05-15
Gender: Male
Blood Group: O+
City: Vellore
Address: Test Address
Password: Test@123


Sample blood stock:

A+ : 10 units
A- : 5 units
B+ : 8 units
B- : 4 units
AB+ : 6 units
AB- : 2 units
O+ : 12 units
O- : 3 units


Sample blood request:

Patient Name: Test Patient
Phone: 9876543210
Blood Group: O+
Units Required: 2
Hospital: ABC Hospital
City: Vellore
Urgency: Emergency


9. FUNCTIONAL TEST CASES

TC-001: Donor Registration

Objective:
Verify that a new donor can register successfully.

Steps:
1. Open the registration page.
2. Enter valid donor information.
3. Submit the form.

Expected Result:
The donor should be registered successfully and stored in MongoDB.

Expected Status:
PASS


TC-002: Duplicate Donor Registration

Objective:
Verify that duplicate email registration is prevented.

Steps:
1. Open the registration page.
2. Enter an already registered email.
3. Submit the form.

Expected Result:
The system should display an appropriate duplicate email error.

Expected Status:
PASS


TC-003: Donor Login

Objective:
Verify login with valid credentials.

Steps:
1. Open the login page.
2. Enter valid email.
3. Enter valid password.
4. Click Login.

Expected Result:
The user should be logged in and redirected to the dashboard.

Expected Status:
PASS


TC-004: Invalid Login

Objective:
Verify that invalid credentials are rejected.

Steps:
1. Open the login page.
2. Enter an incorrect password.
3. Click Login.

Expected Result:
The system should display an invalid email or password message.

Expected Status:
PASS


TC-005: Dashboard Access

Objective:
Verify that a logged-in donor can access the dashboard.

Expected Result:
The dashboard should display donor information.

Expected Status:
PASS


TC-006: Logout

Objective:
Verify logout functionality.

Steps:
1. Login to the system.
2. Click Logout.

Expected Result:
The donor session information should be removed and the user should return to the login page.

Expected Status:
PASS


TC-007: View Blood Stock

Objective:
Verify that blood stock is displayed correctly.

Steps:
1. Open Blood Stock.
2. View the available blood groups.

Expected Result:
The system should display blood stock retrieved from the backend.

Expected Status:
PASS


TC-008: Update Blood Stock

Objective:
Verify that blood stock can be updated.

Steps:
1. Select a blood group.
2. Enter the number of units.
3. Submit the update.

Expected Result:
The stock should be stored or updated in MongoDB.

Expected Status:
PASS


TC-009: Create Blood Request

Objective:
Verify that a blood request can be created.

Steps:
1. Open Request Blood.
2. Enter patient details.
3. Select blood group.
4. Enter required units.
5. Enter hospital and city.
6. Select urgency.
7. Submit the request.

Expected Result:
The request should be stored successfully with Pending status.

Expected Status:
PASS


TC-010: Retrieve Blood Requests

Objective:
Verify that stored blood requests can be retrieved.

Expected Result:
The backend should return blood requests in JSON format.

Expected Status:
PASS


TC-011: Find Donor by Blood Group

Objective:
Verify donor search using blood group.

Steps:
1. Open Find Donors.
2. Select a blood group.
3. Search.

Expected Result:
Matching donors should be displayed.

Expected Status:
PASS


TC-012: Find Donor by City

Objective:
Verify donor search using city.

Steps:
1. Select a blood group.
2. Enter city.
3. Search.

Expected Result:
Matching donors from the selected city should be displayed.

Expected Status:
PASS


TC-013: No Matching Donor

Objective:
Verify behavior when no donor matches the search.

Expected Result:
The system should display no matching donor records without crashing.

Expected Status:
PASS


10. API TEST CASES

API-TC-001

Endpoint:
POST /api/donors/register

Valid Input:
Complete donor information.

Expected:
HTTP 201 Created.


API-TC-002

Endpoint:
POST /api/auth/login

Valid credentials.

Expected:
HTTP 200 OK.


API-TC-003

Endpoint:
POST /api/auth/login

Invalid credentials.

Expected:
HTTP 401 Unauthorized.


API-TC-004

Endpoint:
GET /api/donors

Valid blood group.

Expected:
HTTP 200 OK and donor list.


API-TC-005

Endpoint:
GET /api/blood-stock

Expected:
HTTP 200 OK and blood stock list.


API-TC-006

Endpoint:
POST /api/blood-stock

Valid blood group and units.

Expected:
Blood stock should be created or updated.


API-TC-007

Endpoint:
POST /api/blood-requests

Valid blood request.

Expected:
HTTP 201 Created.


API-TC-008

Endpoint:
GET /api/blood-requests

Expected:
HTTP 200 OK and blood request list.


11. VALIDATION TESTING

The following validations are tested:

- Required fields
- Valid email format
- Unique email
- Valid blood group
- Valid gender
- Non-negative blood stock
- Minimum blood request units
- Valid urgency value
- Valid request status


12. ERROR HANDLING TESTING

The system should handle errors without crashing.

Test scenarios include:

- Missing required fields
- Invalid login credentials
- Duplicate donor email
- Invalid blood group
- Negative stock value
- Database connection failure
- Backend unavailable
- Invalid API request


13. SECURITY TESTING

Security testing includes:

- Password hashing verification
- Password not returned in API responses
- Environment variable protection
- .env excluded from Git
- Input validation
- Duplicate account prevention

The current application uses local storage for donor login information.

JWT-based authentication is planned as a future enhancement.


14. TEST EXECUTION PROCESS

The testing process follows:

Requirement
    |
    v
Test Case Creation
    |
    v
Implementation
    |
    v
Test Execution
    |
    v
Defect Identification
    |
    v
Defect Fix
    |
    v
Retesting
    |
    v
Regression Testing
    |
    v
Test Completion


15. DEFECT MANAGEMENT

Defects are recorded using GitHub Issues.

A defect issue should contain:

- Defect title
- Description
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Related module
- Screenshot if required
- Resolution
- Testing status


16. DEFECT SEVERITY

Critical:
System cannot function or a major feature is completely unavailable.

High:
Important feature is not functioning correctly.

Medium:
Feature works partially or has a significant functional issue.

Low:
Minor UI or usability issue that does not affect the main functionality.


17. SCM AND TESTING INTEGRATION

Testing is integrated with Software Configuration Management.

The workflow is:

GitHub Issue
    |
    v
Development Branch
    |
    v
Code Change
    |
    v
Testing
    |
    v
Defect Fix
    |
    v
Git Commit
    |
    v
Git Push
    |
    v
Review
    |
    v
Merge / Release

Git commits provide a history of code changes.

GitHub Issues provide defect and requirement tracking.

GitHub Projects provide task status tracking.


18. TEST CONFIGURATION ITEMS

The following testing-related files are configuration items:

frontend/src/App.jsx
frontend/src/App.css
frontend/src/pages/DonorRegistration.jsx
frontend/src/pages/Login.jsx
frontend/src/pages/BloodStock.jsx
frontend/src/pages/BloodRequest.jsx
frontend/src/pages/FindDonors.jsx
frontend/src/pages/DonorDashboard.jsx

backend/server.js
backend/models/Donor.js
backend/models/BloodStock.js
backend/models/BloodRequest.js
backend/routes/donorRoutes.js
backend/routes/authRoutes.js
backend/routes/bloodStockRoutes.js
backend/routes/bloodRequestRoutes.js


19. TEST COMPLETION CRITERIA

Testing can be considered complete when:

- All planned test cases have been executed.
- Critical defects are resolved.
- High-priority defects are resolved or formally accepted.
- Main application features work correctly.
- API integration works correctly.
- Database operations work correctly.
- Regression testing is completed.
- Test results are documented.


20. CURRENT TEST STATUS

Donor Registration: Tested
Donor Login: Tested
Donor Dashboard: Tested
Logout: Tested
Blood Stock: Tested
Blood Request: Tested
Find Donors: Tested
MongoDB Integration: Tested
API Integration: Tested
Input Validation: Tested


21. FUTURE TESTING ENHANCEMENTS

Future versions may include:

- Automated unit tests
- Automated API tests
- Selenium UI automation
- PyTest-based testing
- Postman collections
- Apache JMeter performance testing
- Security testing
- Load testing
- Stress testing
- Continuous Integration testing using GitHub Actions
- Code coverage measurement


22. DOCUMENT CHANGE HISTORY

Version: 1.0
Date: 2026-09-24
Description: Initial Test Plan created.


23. CONCLUSION

The Test Plan provides a structured approach for verifying the Smart Blood Donor Management System.

It covers functional, integration, API, UI, database, security, validation, and regression testing.

The testing process is integrated with the project's Software Configuration Management practices so that requirements, implementation changes, defects, testing, and releases can be traced using Git and GitHub.
