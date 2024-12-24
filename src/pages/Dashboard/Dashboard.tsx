import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/navbar';

const Dashboard: React.FC = () => {
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const socialMediaData = {
        labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
        datasets: [
            {
                label: 'Followers',
                data: [1200, 900, 1500, 700],
                backgroundColor: ['#3b5998', '#00acee', '#C13584', '#0077b5'],
            },
        ],
    };

    const adPerformanceData = {
        labels: ['Campaign 1', 'Campaign 2', 'Campaign 3'],
        datasets: [
            {
                label: 'CTR',
                data: [2.5, 3.1, 4.0],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'CPM',
                data: [10, 15, 20],
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 1,
            },
        ],
    };

    const kpiData = {
        labels: ['Visitors', 'Conversions', 'Sales', 'Ad Clicks'],
        datasets: [
            {
                label: 'KPI',
                data: [3000, 120, 500, 200],
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">E-commerce Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Sales Data</h2>
                        <Line data={salesData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Social Media Dashboard</h2>
                        <Bar data={socialMediaData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Ad Performance Dashboard</h2>
                        <Line data={adPerformanceData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Key Performance Indicators</h2>
                        <Bar data={kpiData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;