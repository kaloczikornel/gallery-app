// if we are in development mode, we use the local backend server
export const BACKEND_BASE_URL =
    document.location.hostname === 'localhost'
        ? 'http://localhost:5000'
        : 'https://backend-phi-three-73.vercel.app/';
