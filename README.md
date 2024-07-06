API Endpoints
User Registration and Authentication
Endpoint 1: POST /api/register
Registers a new user.


curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
        "first_name": "Satyam",
        "last_name": "Sisodia",
        "email": "satyam@example.com",
        "password": "password123"
      }'
Endpoint 2: POST /api/login
Logs in an existing user.


curl -s -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
        "email": "satyam@example.com",
        "password": "password123"
      }'
Endpoint 3: POST /api/protected
This endpoint should not be accessible without logging in.

sh
Copy code
curl -X POST http://localhost:3000/api/protected \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json"
Candidate Management
Endpoint 1: POST /api/candidate
Adds a candidate to the database.

sh
Copy code
curl -X POST http://localhost:3000/api/candidate \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "first_name": "sachin",
        "last_name": "bairi",
        "email": "sachin@example.com"
      }'
Endpoint 2: GET /api/candidate
Retrieves candidate information.

sh
Copy code
curl -X GET http://localhost:3000/api/candidate \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -H "Content-Type: application/json"
Public API Endpoints
Endpoint 1: POST /api/public/profile
Creates a public profile.

sh
Copy code
curl -X POST http://localhost:4000/api/public/profile \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json"
Endpoint 2: GET /api/public/candidate
Retrieves public candidate information.

sh
Copy code
curl -X GET http://localhost:4000/api/public/candidate \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json"
