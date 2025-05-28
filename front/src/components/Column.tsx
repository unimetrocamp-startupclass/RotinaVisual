import React from 'react';
import { CardProps } from '@/types';
import styled from 'styled-components';

const Column: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <ColumnDiv className="card">
      {children}
    </ColumnDiv>
  );
};

const ColumnDiv = styled.div`
  background-color:rgba(230, 230, 230, 0.8); 
  border: 1px solid #ddd;
  border-radius: 5px; 
  padding: 20px 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: transform 0.2s;

  @hover {
    transform: translateY(-5px);
  }
`;

export default Column;
