'use client';

import React, { useState, useEffect } from 'react';

const BackgroundGradient = () => {
  const [gradient, setGradient] = useState('');

  // Array of beautiful gradient combinations
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff8a80 0%, #ff80ab 100%)',
    'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)',
    'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    'linear-gradient(135deg, #ff9a8b 0%, #a8e6cf 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 50%, #a8edea 100%)'
  ];

  useEffect(() => {
    // Generate random gradient on component mount
    const randomIndex = Math.floor(Math.random() * gradients.length);
    setGradient(gradients[randomIndex]);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Random gradient background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: gradient
        }}
      ></div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-5"></div>
    </div>
  );
};

export default BackgroundGradient;
