import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytic from './pages/Analytic/Analytic';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import Help from './pages/Help/Help';
import Login from './pages/User/Login';
import Logout from './pages/User/Logout'; // Import the Logout component
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} /> {/* Add this line */}
                    <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
                    <Route path="/analytic" element={<PrivateRoute element={<Analytic />} />} />
                    <Route path="/social-media" element={<PrivateRoute element={<SocialMedia />} />} />
                    <Route path="/help" element={<PrivateRoute element={<Help />} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;