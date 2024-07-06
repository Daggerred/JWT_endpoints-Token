# Project Name

## Description

This project provides a set of APIs for user registration, authentication, and candidate management. It includes protected endpoints that require authentication and public endpoints accessible with an API key.

## Table of Contents

- [User Registration and Authentication](#user-registration-and-authentication)
  - [Endpoint 1: POST /api/register](#endpoint-1-post-apiregister)
  - [Endpoint 2: POST /api/login](#endpoint-2-post-apilogin)
  - [Endpoint 3: POST /api/protected](#endpoint-3-post-apiprotected)
- [Candidate Management](#candidate-management)
  - [Endpoint 1: POST /api/candidate](#endpoint-1-post-apicandidate)
  - [Endpoint 2: GET /api/candidate](#endpoint-2-get-apicandidate)
- [Public API Endpoints](#public-api-endpoints)
  - [Endpoint 1: POST /api/public/profile](#endpoint-1-post-apipublicprofile)
  - [Endpoint 2: GET /api/public/candidate](#endpoint-2-get-apipubliccandidate)

## User Registration and Authentication

### **Endpoint 1: POST /api/register**

Registers a new user.

```sh
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
        "first_name": "Satyam",
        "last_name": "Sisodia",
        "email": "satyam@example.com",
        "password": "password123"
      }'
