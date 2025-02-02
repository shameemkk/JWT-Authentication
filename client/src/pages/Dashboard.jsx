import React, { useContext, useState, useEffect } from 'react';
import { context } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';
import axios from 'axios';
import { API_URLS } from '../config/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [content, setContent] = useState('');
    const { user, logout } = useContext(context);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            axios.get(API_URLS.users.dashboard)
                .then((response) => setContent(response.data.message))
                .catch((error) => {
                    console.error('Dashboard fetch error:', error);
                    if (error.response?.status === 401) {
                        logout();
                    }
                });
        }else{
            navigate('/login');
        }
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <User className="h-6 w-6 text-gray-600" />
                            <span className="ml-2 text-gray-800 font-medium">
                                Welcome, {user?.Username}
                            </span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
                        <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
                        <p>{context ? content : null}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
