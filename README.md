# JWT Authentication Server

This project is a simple JWT-based authentication server built with Node.js, Express, and MongoDB. It uses Argon2 for password hashing and JSON Web Tokens (JWT) for authentication.

## Features

- User registration with hashed passwords
- User login with JWT token generation
- Protected routes using JWT middleware

## Technologies Used

- Node.js
- Express
- MongoDB
- Argon2
- JSON Web Tokens (JWT)
- dotenv
- cors

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB instance running (local or cloud)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/JWT-Authentication.git
    ```
2. Navigate to the project directory:
    ```bash
    cd JWT-Authentication
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    SECRET_KEY=your_secret_key
    MONGO_URI=your_mongodb_uri
    PORT=3000
    ```

### Running the Server

1. Start the server:
    ```bash
    npm start
    ```
2. For development mode with hot-reloading:
    ```bash
    npm run dev
    ```

### API Endpoints

- **POST /auth/register**: Register a new user
- **POST /auth/login**: Login a user and receive a JWT token
- **PUT /auth/update**: Update user details
- **GET /action/info**: Get information (protected route)
- **Protected routes**: Use the `verifyToken` middleware to protect routes

### Example Requests

#### Register

```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{
  "userName": "exampleUser",
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}'
```

#### Login

```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "user@example.com",
  "password": "password123"
}'
```

#### Update User

```bash
curl -X PUT http://localhost:3000/auth/update \
-H "Content-Type: application/json" \
-d '{
  "userId": "user_id_here",
  "userName": "newUserName",
  "email": "newemail@example.com",
  "password": "newpassword123",
  "confirmPassword": "newpassword123"
}'
```

#### Get Info (Protected Route)

```bash
curl -X GET http://localhost:3000/action/info \
-H "Authorization: Bearer your_jwt_token"
```

## License

This project is licensed under the MIT License.
