import { LayoutDashboard } from "lucide-react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const API_URLS = {
    base: BASE_URL,
    auth: {
        login: `${BASE_URL}/auth/login`,
        register: `${BASE_URL}/auth/register`,
        
    },
    users: {
        dashboard: `${BASE_URL}/action/info`,
        

    },
    
};
