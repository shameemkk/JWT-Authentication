import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const tokenTimestamp = user ? user.tokenTimestamp : null;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Check if token is expired
    if (tokenTimestamp) {
        const currentTime = new Date().getTime();
        const loginTimeMs = new Date(tokenTimestamp).getTime();
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

        if (currentTime - loginTimeMs > oneHour) {
            Cookies.remove('user'); // Clear user cookie
            return <Navigate to="/login" replace />;
        }
    }

    return children;
};

export default ProtectedRoute;
