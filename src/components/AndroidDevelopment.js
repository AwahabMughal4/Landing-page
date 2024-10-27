// src/components/AndroidDevelopment.js
import React from 'react';

const AndroidDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-r from-zinc-900 to-purple-900">
      <h1 className="mb-4 text-5xl font-bold">Android Development Services</h1>
      <p className="max-w-2xl mt-4 text-lg text-center">
        Our Android development services help you create powerful mobile applications.
      </p>
      <ul className="mt-6 space-y-2 text-lg list-disc list-inside">
        <li>📱 Custom Android Applications</li>
        <li>🎨 User Interface (UI) Design</li>
        <li>🔌 API Development</li>
        <li>⚙️ Performance Optimization</li>
        <li>🛠️ App Maintenance & Support</li>
      </ul>
      <p className="mt-6 text-lg text-center">
        We leverage the latest technologies to deliver high-quality, scalable applications that meet your business needs.
      </p>
    </div>
  );
};

export default AndroidDevelopment;
