import React, { useState } from 'react';

const MAIL_MANAGER = import.meta.env.VITE_MAIL_MANAGER;
const PASS_MANAGER = import.meta.env.VITE_PASS_MANAGER;

console.log({ PASS_MANAGER })
const LoginForm = ({ loginResult, setLoginResult }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //   const [loginResult, setLoginResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = email === MAIL_MANAGER && password === PASS_MANAGER;
        setLoginResult(isValid);

        // You can perform additional actions here based on the login result
        if (isValid) {
            console.log('Login successful');
            // Redirect or update state as needed
        } else {
            console.log('Login failed');
            // Show error message or perform other actions
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
            {loginResult !== null && (
                <p className={`text-center ${loginResult ? 'text-green-500' : 'text-red-500'}`}>
                    {loginResult ? 'Login successful!' : 'Login failed. Please try again.'}
                </p>
            )}
        </div>
    );
};

export default LoginForm;