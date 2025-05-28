"use client";
import { X, Timer, Calendar } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function Card() {
  const [ showCard, setShowCard ] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <StyledMainDiv>
        <CardContainer onClick={toggleCard}>
          <CardColor />
          <CardContent>
            <CardTitleContainer>
              <CardTitle>Hora do brinquedo</CardTitle>
            </CardTitleContainer>
            <CardBottom>
              <CardBottomTime>
                <Timer size={20} />
                <span>09:30</span>
              </CardBottomTime>
              <CardBottomPhoto>
                <Image
                  width={38}
                  height={38}
                  src="/ProfessorTest.png"
                  alt="Foto do professor"
                />
              </CardBottomPhoto>
            </CardBottom>
          </CardContent>
        </CardContainer>
      {showCard && (
        <>
          <OpenCard>
            <OpenCardMainContent>
              <CloseButton onClick={toggleCard}>
                <X size={28} weight="bold" onClick={toggleCard} />
              </CloseButton>
              <OpenCardTitleInfo>
                  <OpenCardColor />
                <OpenCardLeftInfo>
                  <ProfessorContainer>
                    <CardBottomPhoto>
                      <Image
                        width={38}
                        height={38}
                        src="/ProfessorTest.png"
                        alt="Foto do professor"
                      />
                    </CardBottomPhoto>
                    <span>
                      <p>Professor</p>
                      <p>Matheus</p>
                    </span>
                  </ProfessorContainer>
                </OpenCardLeftInfo>
                <OpenCardDateTime>
                  <Calendar size={20} />
                  <span>09/10/2023 - 09:30</span>
                </OpenCardDateTime>
              </OpenCardTitleInfo>
              <OpenCardMiddleContent>
                <OpenCardTitle>Hora do brinquedo</OpenCardTitle>
                <Separator />
                <OpenCardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur ut distinctio, at odit amet provident laboriosam eveniet adipisci. Perspiciatis earum odio accusantium aspernatur laudantium magnam facilis harum ratione quo?
                </OpenCardDescription>
              </OpenCardMiddleContent>
            </OpenCardMainContent>
            <OpenCardSideBar />
          </OpenCard>
          <FilterBackground onClick={toggleCard} />
        </>
      )}
    </StyledMainDiv>
  );
}

const StyledMainDiv = styled.main`
  margin: 0;
  color: hsl(0, 0%, 10%);
`;

const CardContainer = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  min-height: 92px;
  display: flex;
  flex-direction: row;
  border: 1px solid #dbdbdb;
  width: 100%;
  text-align: left;
`;

const CardColor = styled.div`
  background-color: hsl(0, 95.85062240663899%, 47.254901960784316%);
  width: 4%;
  height: 6rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
`;

const CardTitleContainer = styled.div`
  width: 100%;
`;

const CardTitle = styled.h4`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardBottomTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  span {
    font-size: 0.8rem;
  }
`;

const CardBottomPhoto = styled.div`
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`;

const OpenCard = styled.div`
  width: 600px;
  background-color: hsl(0, 0%, 98%);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 20px;
  padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const OpenCardMainContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
`;

const OpenCardTitleInfo = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
`;

const OpenCardDateTime = styled(CardBottomTime)`
  background-color: hsl(0, 0%, 92%);
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid hsl(0, 0%, 80%);
  span {
    font-size: 0.9rem;
  }
`;

const OpenCardLeftInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const OpenCardColor = styled.div`
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
`;

const ProfessorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: hsl(0, 0%, 92%);
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid hsl(0, 0%, 80%);
  span {
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: hsl(0, 0%, 36%);
  background-color: #ffffff;
  padding: 0.2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border: 1px solid #dbdbdb;
`;

const OpenCardMiddleContent = styled.div`
`;

const OpenCardTitle = styled.h2`
  font-size: clamp(1.5rem, -6.5915492958px + 4.7183098592vw, 2.3rem);
  font-weight: 600;
`;

const Separator = styled.div`
  background-color: hsl(0, 0%, 85%);
  height: 2px;
  border-radius: 5px;
  margin: 1rem 0;
`;

const OpenCardDescription = styled.p`
  font-size: 1rem;
`;

const OpenCardSideBar = styled.div`
  width: 20%;
  min-width: 25px;
`;

const FilterBackground = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
`;