import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-orange-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">XYZ Marketing Tools</div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-300">Dashboard</a></li>
                    <li><a href="/analytic" className="text-white hover:text-gray-300">Analytic</a></li>
                    <li><a href="/social-media" className="text-white hover:text-gray-300">Social Media</a></li>
                    <li><a href="/help" className="text-white hover:text-gray-300">Help</a></li>
                    <li><a href="/logout" className="text-white hover:text-gray-300 bg-black p-5">Logout</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;