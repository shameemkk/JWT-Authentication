# JWT Authentication Project

A full-stack application demonstrating JWT (JSON Web Token) authentication with a React frontend and Node.js backend.

## Project Structure

```
JWT-Authentication/
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API services
│   │   └── App.js      # Main application component
│   └── package.json
└── server/             # Node.js backend application
    ├── controllers/    # Route controllers
    ├── middleware/     # Custom middleware
    ├── models/        # Database models
    ├── routes/        # API routes
    └── server.js      # Main server file
```

## Client (Frontend)

The client is built with React and includes:

- User registration and login forms
- Protected routes using React Router
- JWT token storage in localStorage
- Axios for API requests
- Authentication state management
- Protected component examples

### Key Features (Client)
- Secure token storage
- Authentication state persistence
- Protected route middleware
- Form validation
- Error handling

## Server (Backend)

The server is built with Node.js, Express, and MongoDB and includes:

- JWT-based authentication system
- User registration and login endpoints
- Protected route middleware
- Password hashing using argon2
- MongoDB database integration

### Key Features (Server)
- Secure password hashing
- JWT token generation and verification
- Protected API endpoints
- Input validation
- Error handling middleware

## Setup Instructions

### Client Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Server Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with your environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication Routes
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/profile - Get user profile (protected)

### Protected Routes
- GET /api/protected/data - Get protected data (requires authentication)

## Security Features

- JWT token expiration
- Password hashing
- Protected routes
- CORS configuration
- Input sanitization
- Error handling

## Technologies Used

### Frontend
- React
- React Router
- Axios
- Bootstrap (or your CSS framework)

### Backend
- Node.js
- Express
- MongoDB
- JWT (jsonwebtoken)
- argon2
- Mongoose

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
