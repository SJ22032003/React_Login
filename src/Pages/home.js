import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Home() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = () => {
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
            }
            console.log(savedToken);
        }
        getToken();
    }, []);

    const logOut = () => {
        localStorage.removeItem("token");
        window.location.href = '/login';
    };

    return (
        <div className='flex w-full h-screen justify-center items-center'>
            {token !== null ? (
                <div>
                    <h1>Welcome to the Home Page</h1>
                    <button
                        className='w-1/3 bg-white p-3 my-4 rounded-md border-2 border-black'
                        onClick={logOut}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <Navigate to={"/login"} />
            )}
        </div>
    );
}
