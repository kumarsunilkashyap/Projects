import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="font-semibold">Total Users</h2>
                    <p className="text-3xl">150</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="font-semibold">Active Users</h2>
                    <p className="text-3xl">120</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="font-semibold">New Signups</h2>
                    <p className="text-3xl">30</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="font-semibold">Total Reports</h2>
                    <p className="text-3xl">5</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="font-semibold">Settings Configured</h2>
                    <p className="text-3xl">10</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;