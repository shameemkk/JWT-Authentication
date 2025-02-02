# React Authentication Client

A modern React application with user authentication features built using Vite, React Router, and Tailwind CSS.

## Features

- User Registration
- User Login
- Protected Routes
- JWT Authentication
- Responsive Design
- Error Handling

## Tech Stack

- React 
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API for state management

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Registration.jsx
│   │   └── Dashboard.jsx
│   ├── config/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
```

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add:
```
VITE_API_BASE_URL=http://localhost:3000
```

4. Start the development server
```bash
npm run dev
```

## Environment Variables

- `VITE_API_BASE_URL`: Base URL for the backend API

## API Endpoints

- POST `/auth/login`: User login
- POST `/auth/register`: User registration
- GET `/action/info`: Dashboard information (Protected route)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License
