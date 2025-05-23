import React from 'react';
import { CardProps } from '@/types';

const Column: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div className="card">
      {children}
      <style jsx>{`
        .card {
          background-color:rgba(230, 230, 230, 0.8); 
          border: 1px solid #ddd;
          border-radius: 5px; 
          padding: 20px;
          margin: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 212px; 
          height: 330px; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-5px);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Column;
