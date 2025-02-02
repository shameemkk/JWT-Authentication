import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('user');
    const tokenTimestamp = user ? JSON.parse(user).tokenTimestamp : null;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Check if token is expired
    if (tokenTimestamp) {
        const currentTime = new Date().getTime();
        const loginTimeMs = new Date(tokenTimestamp).getTime();
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

        if (currentTime - loginTimeMs > oneHour) {
            localStorage.clear(); // Clear all localStorage
            return <Navigate to="/login" replace />;
        }
    }

    return children;
};

export default ProtectedRoute;
