// src/components/WebDevelopment.js
import React from 'react';

const WebDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-r from-zinc-900 to-purple-900">
      <h1 className="mb-4 text-5xl font-bold">Web Development Services</h1>
      <p className="max-w-2xl mt-4 text-lg text-center">
        We provide comprehensive web development solutions tailored to meet your business needs.
      </p>
      <ul className="mt-6 space-y-2 text-lg list-disc list-inside">
        <li>🌐 Custom Website Development</li>
        <li>📱 Responsive Design & Development</li>
        <li>🛒 E-commerce Solutions</li>
        <li>📋 Content Management Systems (CMS)</li>
        <li>🔌 API Development & Integration</li>
        <li>🔧 Website Maintenance & Support</li>
      </ul>
      <p className="mt-6 text-lg text-center">
        Our experienced developers ensure your website is user-friendly, responsive, and optimized for performance.
      </p>
    </div>
  );
};

export default WebDevelopment;
