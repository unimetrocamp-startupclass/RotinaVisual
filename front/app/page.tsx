"use client";

import Header from '../src/components/header';
import { topCards, bottomCards } from '@/local/card';
import CardGrid from '@/components/CardGrid';
import styled from 'styled-components';

export default function Home() {
  

  return (
    <>
      <Header
        rightContent={
          <div style={{
            backgroundColor: '#D9F0DB',
            borderRadius: '20px',
            padding: '10px 15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <img src="/usuario.webp" alt="Perfil" style={{ borderRadius: '50%', width: '40px', height: '38px' }} />
            <span>João Paulo Martins</span>
            <img src="/Seta.webp" alt="seta" style={{ width: '20px', height: '20px' }} />
          </div>
        }
      />

      <MainContent>
        <CardGrid
          cards={topCards}
          showDaysDesktop={true}
        />

        <WeekDivider>
          Segunda Semana
        </WeekDivider>

        <CardGrid
          cards={bottomCards}
          showDaysDesktop={false}
          isSecondWeek={true}
        />
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  margin-top: 7rem;
`;

const WeekDivider = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin: 15px 0;
  display: none;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;
