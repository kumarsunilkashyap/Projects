import React from 'react';

const Users = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users Management</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Role</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data, replace with dynamic data */}
                    <tr>
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">John Doe</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">Admin</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500 ml-2">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">2</td>
                        <td className="py-2 px-4 border-b">Jane Smith</td>
                        <td className="py-2 px-4 border-b">jane@example.com</td>
                        <td className="py-2 px-4 border-b">User</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500 ml-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Users;