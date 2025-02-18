import React from 'react';

const Settings = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Site Title</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter site title" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Admin Email</label>
                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter admin email" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter new password" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;