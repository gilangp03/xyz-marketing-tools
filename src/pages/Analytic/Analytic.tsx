import React from 'react';
import Navbar from '../../components/navbar';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytic: React.FC = () => {
    const userBehaviorData = {
        labels: ['Page A', 'Page B', 'Page C', 'Page D'],
        datasets: [
            {
                label: 'Page Views',
                data: [300, 500, 200, 400],
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const customerSegmentationData = {
        labels: ['Segment 1', 'Segment 2', 'Segment 3'],
        datasets: [
            {
                label: 'Customers',
                data: [150, 200, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const roiData = {
        labels: ['Campaign 1', 'Campaign 2', 'Campaign 3'],
        datasets: [
            {
                label: 'ROI',
                data: [2.5, 3.0, 4.5],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    const salesPredictionData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Predicted Sales',
                data: [5000, 7000, 6000, 8000],
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100">
                <div className="container mx-auto p-4">
                    <h2 className="text-xl font-bold mb-4">Marketing Analytics  </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">User Behavior Analysis</h3>
                            <Line data={userBehaviorData} />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Customer Segmentation</h3>
                            <Bar data={customerSegmentationData} />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">ROI Analysis</h3>
                            <Line data={roiData} />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Sales Prediction</h3>
                            <Bar data={salesPredictionData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytic;