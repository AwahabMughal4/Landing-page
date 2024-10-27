// src/components/EmbeddedSystem.js
import React from 'react';

const EmbeddedSystem = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-r from-zinc-900 to-purple-900">
      <h1 className="mb-4 text-5xl font-bold">Embedded System Services</h1>
      <p className="max-w-2xl mt-4 text-lg text-center">
        We offer cutting-edge embedded system development services for a wide range of applications.
      </p>
      <ul className="mt-6 space-y-2 text-lg list-disc list-inside">
        <li>🔧 Custom Embedded Systems Development</li>
        <li>📝 Firmware Development</li>
        <li>🌐 IoT Solutions</li>
        <li>📦 Hardware Prototyping</li>
        <li>🔗 System Integration</li>
        <li>🧪 Testing & Validation</li>
      </ul>
      <p className="mt-6 text-lg text-center">
        Our expert team designs and develops efficient embedded solutions tailored to your project requirements.
      </p>
    </div>
  );
};

export default EmbeddedSystem;
