import React from 'react';
import CardGrid from '../src/components/CardGrid';
import { CardData } from '../src/types';

const Home: React.FC = () => {
 const topCards: CardData[] = [
  { title: 'Column 1', description: 'Descrição do card 1' },
  { title: 'Column 2', description: 'Descrição do card 2' },
  { title: 'Column 3', description: 'Descrição do card 3' },
  { title: 'Column 4', description: 'Descrição do card 4' },
  { title: 'Column 5', description: 'Descrição do card 5' },
];

const bottomCards: CardData[] = [
  { title: 'Column 6', description: 'Descrição do card 6' },
  { title: 'Column 7', description: 'Descrição do card 7' },
  { title: 'Column 8', description: 'Descrição do card 8' },
  { title: 'Column 9', description: 'Descrição do card 9' },
  { title: 'Column 10', description: 'Descrição do card 10' },
];

  return (

<div className="container">
  
  <CardGrid 
    cards={topCards} 
    showDaysDesktop={true}
  />
  
  {/* Divisor no mobile */}
  <div className="week-divider">
    Segunda Semana
  </div>
  
  <CardGrid 
    cards={bottomCards} 
    showDaysDesktop={false}
    isSecondWeek={true}
  />

  <style jsx>{`
    .week-divider {
      text-align: center;
      font-size: 1.2rem;
      margin: 15px 0;
      display: none;
      padding: 8px;
      background: #f5f5f5;
      border-radius: 5px;
    }
    
    @media (max-width: 768px) {
      .week-divider {
        display: block;
      }
    }
  `}</style>
</div>
  );
};

export default Home;
