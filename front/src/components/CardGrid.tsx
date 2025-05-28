import React from 'react';
import Column from './Column';
import { CardData } from '@/types';
import Card from './Card';

interface CardGridProps {
  cards: CardData[];
  showDaysDesktop?: boolean; 
  isSecondWeek?: boolean;
}

const CardGrid: React.FC<CardGridProps> = ({ 
  cards, 
  showDaysDesktop = true,
  isSecondWeek = false 
}) => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  return (
    <div className={`card-grid ${isSecondWeek ? 'second-week' : ''}`}>
      {cards.map((card, index) => (
        <div key={index} className="card-wrapper">
          <div className="day-label">
            {days[index]}
          </div>
          <Column {...card}>
            <Card />
          </Column>
        </div>
      ))}

      <style jsx>{`
        .card-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin: 20px 0;
        }
        
        .card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 210px;
        }
        
        .day-label {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #444;
          display: ${showDaysDesktop ? 'block' : 'none'}; /* Controla visibilidade */
        }
        
        /* Mobile - mostra TODOOOS os dias */
        @media (max-width: 768px) {
          .day-label {
            display: block !important;
          }
          
          .second-week .day-label::before {
          }
        }
      `}</style>
    </div>
  );
};

export default CardGrid;
