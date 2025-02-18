import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">Admin Panel</div>
                <div className="flex space-x-4">
                    <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                    <Link to="/users" className="text-gray-300 hover:text-white">Users</Link>
                    <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
                    <Link to="/reports" className="text-gray-300 hover:text-white">Reports</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;