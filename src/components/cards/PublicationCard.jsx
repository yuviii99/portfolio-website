import React from 'react';
import styled from "styled-components";
import LaunchIcon from '@mui/icons-material/Launch';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #1d1836;
  color: #fff;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 6px;
  padding: 1.5em;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Button = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  width: 250px;
  align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;



const PublicationCard = ({publication}) => {
  return (
    <Card>
      <Top>
        <Body>
          <Role><b>{publication.title}</b></Role>
          <Company>{publication.conference}</Company>
          <Date>{publication.date}</Date>
        </Body>
      </Top>
      <Description>
        <Span>{publication.description}</Span>
        <br/>
        <Skills>
          <b>Publisher</b>
          <ItemWrapper>
            <Skill>{publication.publisher}</Skill>
          </ItemWrapper>
        </Skills>
      </Description>
      <Button href={publication.link} target="_blank">Show Publication&nbsp;<LaunchIcon/></Button>
    </Card>
  );
};

export default PublicationCard;
