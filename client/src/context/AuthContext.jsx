import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { API_URLS } from '../config/api';
import Cookies from 'js-cookie';

export const context = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(() => {
        const userCookie = Cookies.get('user');
        return userCookie ? JSON.parse(userCookie) : null;
    });

    useEffect(() => {
        if (user) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        }
    }, [user]);

    const login = async (userData) => {
        try {
            const response = await axios.post(API_URLS.auth.login, userData);
            const user = { ...response.data, tokenTimestamp: new Date().toISOString() };
            setUser(user);
            Cookies.set('user', JSON.stringify(user));
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            return user;
        } catch (error) {
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post(API_URLS.auth.register, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('user');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <context.Provider value={{ user, login, logout, register }}>
            {children}
        </context.Provider>
    );
};

export default AuthContext;
