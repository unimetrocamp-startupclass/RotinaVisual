import React from 'react';
import CardGrid from '../src/components/CardGrid';
import { CardData } from '../src/types';

const Home: React.FC = () => {
 const topCards: CardData[] = [
  { title: 'Card 1', description: 'Descrição do card 1' },
  { title: 'Card 2', description: 'Descrição do card 2' },
  { title: 'Card 3', description: 'Descrição do card 3' },
  { title: 'Card 4', description: 'Descrição do card 4' },
  { title: 'Card 5', description: 'Descrição do card 5' },
];

const bottomCards: CardData[] = [
  { title: 'Card 6', description: 'Descrição do card 6' },
  { title: 'Card 7', description: 'Descrição do card 7' },
  { title: 'Card 8', description: 'Descrição do card 8' },
  { title: 'Card 9', description: 'Descrição do card 9' },
  { title: 'Card 10', description: 'Descrição do card 10' },
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
