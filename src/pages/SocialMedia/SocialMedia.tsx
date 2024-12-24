import React from 'react';
import Navbar from '../../components/navbar';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const SocialMedia: React.FC = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Engagement Rate',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Social Media</h1>
                <div className="bg-white p-4 rounded shadow flex items-center">
                    <h2 className="text-xl font-semibold mb-2 mr-2">Filter Per Platform</h2>
                    <select className="p-2 border rounded">
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>TikTok</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Ringkasan Data Real-Time</h2>
                        <Line data={data} />
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Kalender Kampanye</h2>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        />
                    </div>
                </div>

                <h1 className="text-2xl font-bold mt-8 mb-4">Manajemen Konten</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Content Scheduler</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Jadwalkan Konten</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Drag-and-Drop Editor</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Buka Editor</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Content Repository</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Library</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Social Listening</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Keyword Monitoring</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Pantau Kata Kunci</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Sentiment Analysis</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Analisis Sentimen</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Trending Topics</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Tren</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Engagement Tools</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Unified Inbox</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Buka Kotak Masuk</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Quick Reply Templates</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Template</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">User Tagging</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Tag Pengguna</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Analisis dan Pelaporan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Customizable Reports</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Buat Laporan</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Audience Insights</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Insights</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Campaign ROI Tracking</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lacak ROI</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Kolaborasi Tim</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Approval Workflow</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Alur Persetujuan</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Task Management</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Kelola Tugas</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Version History</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Riwayat</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Integrasi</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">API Platform Media Sosial</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Integrasi API</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">CRM Integration</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Hubungkan CRM</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">E-commerce Analytics</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Analitik</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Otomasi</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Post Automation</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Otomatisasi Posting</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">AI Content Suggestions</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Saran</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Chatbot Management</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Kelola Chatbot</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Keamanan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Multi-Level Access</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Atur Akses</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Activity Log</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Log</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Two-Factor Authentication</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Aktifkan 2FA</button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">Pelatihan dan Bantuan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Onboarding Tutorial</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Mulai Tutorial</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Knowledge Base</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Artikel</button>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Live Chat Support</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Hubungi Support</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'tailwindcss/tailwind.css';

const localizer = momentLocalizer(moment);

const events = [
    { title: 'Campaign 11-11', start: new Date(2024, 10, 9), end: new Date(2024, 10, 15) },
    { title: 'Campaign 12-12', start: new Date(2024, 11, 10), end: new Date(2024, 11, 15) },
];

<Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
    className="bg-gray-100 border border-gray-300 rounded-lg p-4"
>
    <div className="rbc-event bg-blue-500 text-white rounded-md p-1"></div>
    <div className="rbc-toolbar bg-white border-b border-gray-300 mb-2"></div>
    <div className="rbc-header bg-gray-200 border-b border-gray-300"></div>
</Calendar>