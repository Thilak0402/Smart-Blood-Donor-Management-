API DOCUMENTATION
Smart Blood Donor Management System

1. DOCUMENT INFORMATION

Project Name: Smart Blood Donor Management System
Document Name: API Documentation
Version: 1.0
Status: Active
Technology: Node.js, Express.js, MongoDB, Mongoose
Frontend: React + Vite
Backend Port: 5000
Base URL: http://localhost:5000


2. INTRODUCTION

The Smart Blood Donor Management System provides RESTful APIs for managing blood donors, donor authentication, blood stock, and blood requests.

The backend APIs are developed using Node.js and Express.js. MongoDB is used as the database, with Mongoose providing the database interaction layer.

The APIs allow the frontend application to communicate with the backend server and perform operations such as:

- Registering donors
- Authenticating donors
- Searching for donors
- Managing blood stock
- Creating blood requests
- Retrieving blood requests


3. API ARCHITECTURE

The system follows a client-server architecture.

React Frontend
      |
      | HTTP Requests
      v
Express.js Backend
      |
      | Mongoose
      v
MongoDB Database

The frontend communicates with the backend using HTTP requests.

The backend processes the request, performs validation and database operations, and returns a JSON response.


4. BASE URL

During local development, the backend runs on:

http://localhost:5000

Therefore, the API base URL is:

http://localhost:5000/api


5. API ENDPOINTS SUMMARY

Donor Registration:
POST /api/donors/register
Purpose: Register a new donor

Find Donors:
GET /api/donors
Purpose: Search available donors

Donor Login:
POST /api/auth/login
Purpose: Authenticate a donor

Blood Stock:
GET /api/blood-stock
Purpose: Retrieve blood stock

Blood Stock:
POST /api/blood-stock
Purpose: Add or update blood stock

Blood Request:
POST /api/blood-requests
Purpose: Create a blood request

Blood Request:
GET /api/blood-requests
Purpose: Retrieve blood requests


6. DONOR REGISTRATION API

Endpoint:
POST /api/donors/register

Purpose:
Registers a new blood donor in the system.

The API receives donor information from the frontend and stores the donor information in MongoDB.

The donor password is hashed using bcrypt before it is stored.

Request Headers:

Content-Type: application/json

Request Body:

{
  "fullName": "Thilak",
  "email": "thilak@example.com",
  "phone": "9876543210",
  "dateOfBirth": "2003-05-15",
  "gender": "Male",
  "bloodGroup": "O+",
  "city": "Vellore",
  "address": "VIT Campus, Vellore",
  "lastDonationDate": "2025-10-10",
  "password": "Password@123"
}

Required Fields:

- Full Name
- Email
- Phone Number
- Date of Birth
- Gender
- Blood Group
- City
- Address
- Password

The Last Donation Date is optional.

Successful Response:
HTTP Status: 201 Created

{
  "message": "Donor registered successfully",
  "donor": {
    "id": "65abc123456789",
    "fullName": "Thilak",
    "email": "thilak@example.com",
    "bloodGroup": "O+"
  }
}

Duplicate Email Response:
HTTP Status: 400 Bad Request

{
  "message": "Donor with this email already exists"
}

Registration Error:
HTTP Status: 500 Internal Server Error

{
  "message": "Registration failed",
  "error": "Error details"
}


7. DONOR LOGIN API

Endpoint:
POST /api/auth/login

Purpose:
Authenticates an existing donor using email and password.

The backend searches for the donor using the email address and compares the entered password with the securely hashed password stored in MongoDB.

Request Headers:

Content-Type: application/json

Request Body:

{
  "email": "thilak@example.com",
  "password": "Password@123"
}

Successful Response:
HTTP Status: 200 OK

{
  "message": "Login successful",
  "donor": {
    "id": "65abc123456789",
    "fullName": "Thilak",
    "email": "thilak@example.com",
    "bloodGroup": "O+",
    "city": "Vellore"
  }
}

The password is not returned in the response.

Invalid Credentials:
HTTP Status: 401 Unauthorized

{
  "message": "Invalid email or password"
}

Login Server Error:
HTTP Status: 500 Internal Server Error

{
  "message": "Login failed",
  "error": "Error details"
}


8. FIND DONORS API

Endpoint:
GET /api/donors

Purpose:
Searches for blood donors based on blood group and optionally city.

The API supports:

- Blood group filtering
- City filtering
- Case-insensitive city search


9. FIND DONORS BY BLOOD GROUP

Request:

GET /api/donors?bloodGroup=O+

Successful Response:
HTTP Status: 200 OK

[
  {
    "_id": "65abc123456789",
    "fullName": "Thilak",
    "bloodGroup": "O+",
    "city": "Vellore",
    "phone": "9876543210"
  }
]


10. FIND DONORS BY BLOOD GROUP AND CITY

Request:

GET /api/donors?bloodGroup=O+&city=Vellore

Successful Response:

[
  {
    "_id": "65abc123456789",
    "fullName": "Thilak",
    "bloodGroup": "O+",
    "city": "Vellore",
    "phone": "9876543210"
  }
]

If no donors match the search criteria:

HTTP Status: 200 OK

[]


11. FIND DONOR ERROR

HTTP Status: 500 Internal Server Error

{
  "message": "Failed to find donors",
  "error": "Error details"
}


12. BLOOD STOCK API

GET BLOOD STOCK

Endpoint:

GET /api/blood-stock

Purpose:

Retrieves the current blood stock available in the system.

Successful Response:
HTTP Status: 200 OK

[
  {
    "_id": "65abc001",
    "bloodGroup": "A+",
    "unitsAvailable": 10,
    "lastUpdated": "2026-09-24T10:30:00.000Z"
  },
  {
    "_id": "65abc002",
    "bloodGroup": "A-",
    "unitsAvailable": 5,
    "lastUpdated": "2026-09-24T10:30:00.000Z"
  },
  {
    "_id": "65abc003",
    "bloodGroup": "B+",
    "unitsAvailable": 8,
    "lastUpdated": "2026-09-24T10:30:00.000Z"
  }
]

The API returns the available blood groups sorted by blood group.


13. UPDATE BLOOD STOCK API

Endpoint:

POST /api/blood-stock

Purpose:

Adds or updates the number of available blood units for a particular blood group.

The system uses the blood group as a unique identifier.

Request Headers:

Content-Type: application/json

Request Body:

{
  "bloodGroup": "O+",
  "unitsAvailable": 12
}

Successful Response:
HTTP Status: 200 OK

{
  "message": "Blood stock updated successfully",
  "stock": {
    "bloodGroup": "O+",
    "unitsAvailable": 12
  }
}

Supported Blood Groups:

A+
A-
B+
B-
AB+
AB-
O+
O-

Validation:

The number of available units cannot be negative.


14. BLOOD REQUEST API

CREATE BLOOD REQUEST

Endpoint:

POST /api/blood-requests

Purpose:

Creates a new blood request for a patient.

The request contains information about:

- Patient
- Contact number
- Required blood group
- Required units
- Hospital
- City
- Urgency

Request Headers:

Content-Type: application/json

Request Body:

{
  "patientName": "Ravi Kumar",
  "phone": "9876543210",
  "bloodGroup": "O+",
  "unitsRequired": 2,
  "hospital": "ABC Hospital",
  "city": "Vellore",
  "urgency": "Emergency"
}

Urgency Values:

Normal
Urgent
Emergency

Successful Response:
HTTP Status: 201 Created

{
  "message": "Blood request created successfully",
  "request": {
    "_id": "65abc789",
    "patientName": "Ravi Kumar",
    "phone": "9876543210",
    "bloodGroup": "O+",
    "unitsRequired": 2,
    "hospital": "ABC Hospital",
    "city": "Vellore",
    "urgency": "Emergency",
    "status": "Pending"
  }
}


15. GET BLOOD REQUESTS API

Endpoint:

GET /api/blood-requests

Purpose:

Retrieves all blood requests stored in the database.

Requests are returned with the latest requests first.

Successful Response:
HTTP Status: 200 OK

[
  {
    "_id": "65abc789",
    "patientName": "Ravi Kumar",
    "phone": "9876543210",
    "bloodGroup": "O+",
    "unitsRequired": 2,
    "hospital": "ABC Hospital",
    "city": "Vellore",
    "urgency": "Emergency",
    "status": "Pending",
    "createdAt": "2026-09-24T10:30:00.000Z"
  }
]


16. BLOOD REQUEST STATUS

Each blood request contains a status field.

Supported statuses:

Pending
Approved
Completed
Rejected

The default status for a newly created request is:

Pending


17. HTTP STATUS CODES

200 - Request successful
201 - Resource created successfully
400 - Bad request / validation error
401 - Authentication failed
404 - Resource not found
500 - Internal server error


18. API DATA VALIDATION

The backend validates incoming data before storing it in MongoDB.

Examples of validation include:

- Required fields must be provided.
- Email must be unique for donors.
- Blood group must be one of the supported values.
- Units available cannot be negative.
- Units required must be at least 1.
- Gender must use a supported value.
- Urgency must use a supported value.
- Blood request status must use a supported value.


19. SUPPORTED BLOOD GROUPS

The following blood groups are supported throughout the application:

A+
A-
B+
B-
AB+
AB-
O+
O-


20. FRONTEND API INTEGRATION

The React frontend communicates with the backend using the JavaScript fetch() API.

Example:

const response = await fetch(
  "http://localhost:5000/api/blood-stock"
);

const data = await response.json();

For POST requests, JSON data is sent using:

const response = await fetch(
  "http://localhost:5000/api/blood-requests",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  }
);


21. API MODULE STRUCTURE

The backend API routes are organized into separate modules.

backend
|
|-- models
|   |-- Donor.js
|   |-- BloodStock.js
|   |-- BloodRequest.js
|
|-- routes
|   |-- donorRoutes.js
|   |-- authRoutes.js
|   |-- bloodStockRoutes.js
|   |-- bloodRequestRoutes.js
|
|-- server.js

This modular structure makes the backend easier to maintain and supports SCM practices such as controlled changes and traceability.


22. API ROUTE REGISTRATION

The Express server registers the API routes using the following base paths:

/api/donors
/api/auth
/api/blood-stock
/api/blood-requests

The route structure separates different system functionalities into independent modules.


23. AUTHENTICATION FLOW

The donor authentication process works as follows:

User
 |
 | Email + Password
 v
React Login Page
 |
 | POST /api/auth/login
 v
Express Authentication Route
 |
 | Find donor by email
 v
MongoDB
 |
 | Donor found
 v
bcrypt Password Comparison
 |
 | Valid
 v
Login Response
 |
 v
React Dashboard

The frontend stores the returned donor information in browser local storage for the current application session.


24. DONOR REGISTRATION FLOW

Donor
 |
 | Registration Form
 v
React Frontend
 |
 | POST /api/donors/register
 v
Express API
 |
 | Validate data
 v
bcrypt Password Hashing
 |
 v
MongoDB
 |
 v
Registration Response


25. BLOOD STOCK FLOW

Admin/User
 |
 | Blood Stock Data
 v
React Blood Stock Page
 |
 | POST /api/blood-stock
 v
Express API
 |
 v
MongoDB
 |
 v
Updated Blood Stock

For viewing stock:

React Blood Stock Page
 |
 | GET /api/blood-stock
 v
Express API
 |
 v
MongoDB
 |
 v
Blood Stock JSON
 |
 v
React UI


26. BLOOD REQUEST FLOW

User
 |
 | Blood Request Form
 v
React Frontend
 |
 | POST /api/blood-requests
 v
Express API
 |
 | Validate request
 v
MongoDB
 |
 v
Blood Request Created
 |
 v
Success Response


27. DONOR SEARCH FLOW

User
 |
 | Blood Group + City
 v
Find Donors Page
 |
 | GET /api/donors
 v
Express Donor Route
 |
 | Apply filters
 v
MongoDB
 |
 v
Matching Donors
 |
 v
React Donor List


28. ERROR HANDLING

The backend uses try-catch blocks for API operations.

If an error occurs, the server returns a JSON response containing:

{
  "message": "Error description",
  "error": "Technical error details"
}

The frontend checks the HTTP response status and displays an appropriate message to the user.


29. CORS CONFIGURATION

The backend uses the Express CORS middleware to allow communication between the React frontend and Node.js backend during development.

Frontend:

http://localhost:5173

Backend:

http://localhost:5000

CORS allows the frontend application to send requests to the backend server running on a different port.


30. DATABASE INTEGRATION

MongoDB is used as the primary database.

Mongoose provides the connection and schema management layer.

The main collections are represented by the following models:

Donor
BloodStock
BloodRequest


31. ENVIRONMENT CONFIGURATION

The MongoDB connection string and server configuration are stored in the backend .env file.

Example structure:

MONGODB_URI=<MongoDB connection string>
PORT=5000

Actual credentials must not be committed to GitHub.

The .env file is excluded through .gitignore.


32. API SECURITY CONSIDERATIONS

The following security practices are implemented:

1. Donor passwords are hashed using bcrypt.
2. Passwords are not returned in login responses.
3. MongoDB credentials are stored in environment variables.
4. The .env file is excluded from Git.
5. Input values are validated using Mongoose schemas.
6. Duplicate donor email addresses are prevented.


33. CURRENT AUTHENTICATION LIMITATION

The current implementation uses local storage on the frontend to maintain donor login information.

The current implementation does not yet use JWT-based authentication.

A future version can implement:

- JWT Authentication
- Refresh Tokens
- Protected API Routes
- Role-Based Access Control
- Token Expiration


34. API TESTING

The APIs can be tested using:

- Browser
- Postman
- Frontend application
- VS Code
- REST API testing tools

Example API:

GET http://localhost:5000/api/blood-stock

The API should return a JSON response containing the available blood stock.


35. API TESTING SCENARIOS

Test Case 1:
Register valid donor
API: POST /api/donors/register
Expected Result: Donor created

Test Case 2:
Register duplicate email
API: POST /api/donors/register
Expected Result: Error returned

Test Case 3:
Login with valid credentials
API: POST /api/auth/login
Expected Result: Login successful

Test Case 4:
Login with invalid credentials
API: POST /api/auth/login
Expected Result: Authentication error

Test Case 5:
Search donor by blood group
API: GET /api/donors
Expected Result: Matching donors returned

Test Case 6:
Search donor by city
API: GET /api/donors
Expected Result: Matching donors returned

Test Case 7:
Get blood stock
API: GET /api/blood-stock
Expected Result: Stock returned

Test Case 8:
Update blood stock
API: POST /api/blood-stock
Expected Result: Stock updated

Test Case 9:
Create blood request
API: POST /api/blood-requests
Expected Result: Request created

Test Case 10:
Get blood requests
API: GET /api/blood-requests
Expected Result: Requests returned


36. SCM INTEGRATION

The API implementation is managed using Git and GitHub.

The API-related files are configuration items under source control.

Important files include:

backend/routes/donorRoutes.js
backend/routes/authRoutes.js
backend/routes/bloodStockRoutes.js
backend/routes/bloodRequestRoutes.js

backend/models/Donor.js
backend/models/BloodStock.js
backend/models/BloodRequest.js

Changes to these files are tracked using Git commits.

GitHub Issues can be used to record API-related changes and defects.

GitHub Projects provides task tracking for API development.


37. API CHANGE MANAGEMENT

Any significant API change should follow this process:

Requirement
     |
     v
GitHub Issue
     |
     v
Development Branch
     |
     v
API Implementation
     |
     v
Testing
     |
     v
Git Commit
     |
     v
GitHub Push
     |
     v
Review
     |
     v
Merge / Release

This process provides traceability between requirements, implementation, testing, and source code.


38. API VERSIONING

The current application uses:

/api

Future versions can use versioned APIs such as:

/api/v1
/api/v2

Versioning can be introduced when significant API changes are required while maintaining compatibility with existing clients.


39. FUTURE API ENHANCEMENTS

Future versions of the system may include:

- JWT authentication
- Admin authentication
- Role-based access control
- Protected API routes
- Blood request approval APIs
- Blood request status update APIs
- Donor availability status
- Donor eligibility validation
- Email notifications
- SMS notifications
- Emergency donor alerts
- API rate limiting
- API versioning
- Swagger/OpenAPI documentation
- Advanced search and filtering
- Pagination
- API logging
- Automated API testing


40. API DOCUMENTATION STATUS

Donor Registration API - Completed
Donor Login API - Completed
Find Donors API - Completed
Blood Stock API - Completed
Blood Request API - Completed
API Error Handling - Completed
API Documentation - Completed
JWT Authentication - Future Enhancement
API Versioning - Future Enhancement
Swagger Documentation - Future Enhancement


41. DOCUMENT CHANGE HISTORY

Version 1.0
Date: 2026-09-24
Description: Initial API documentation created


42. CONCLUSION

The Smart Blood Donor Management System provides RESTful APIs for the major functions of the application.

The APIs provide communication between the React frontend, Express.js backend, and MongoDB database.

The documented APIs support donor registration, authentication, donor searching, blood stock management, and blood request management.

The API documentation also supports the project's Software Configuration Management objectives by providing clear information about the implemented interfaces, configuration items, testing scenarios, and future enhancements.
