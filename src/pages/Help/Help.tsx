import React from 'react';
import Navbar from '../../components/navbar';

const Help: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Help</h1>
                <p className="mb-4">
                    Welcome to the Help page for the Marketing Tools Dashboard. Here you can find answers to frequently asked questions and guides on how to use the various tools available.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>How do I create a new marketing campaign?</li>
                    <li>How can I track the performance of my campaigns?</li>
                    <li>What tools are available for social media marketing?</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">Guides</h2>
                <ul className="list-disc list-inside">
                    <li>Getting Started with the Dashboard</li>
                    <li>Using the Analytics Tool</li>
                    <li>Integrating with Social Media Platforms</li>
                </ul>
            </div>
        </div>
    );
};

export default Help;