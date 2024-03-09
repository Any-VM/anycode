"use client"
import React from 'react';

const GlobalError: React.FC<{ message: string }> = ({ message }) => {
  return <div>Error: {message}</div>;
};

export default GlobalError;

