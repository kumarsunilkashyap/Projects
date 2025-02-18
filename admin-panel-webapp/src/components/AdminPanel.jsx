import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import Reports from '../pages/Reports';

const AdminPanel = () => {
    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-4">
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/users" component={Users} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/reports" component={Reports} />
                        <Route path="/" exact component={Dashboard} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default AdminPanel;