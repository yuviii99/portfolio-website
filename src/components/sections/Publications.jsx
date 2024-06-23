import React from 'react';
import { publications } from '../../data/constants';
import PublicationCard from '../cards/PublicationCard';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Publications = () => {
  return (
    <Container id="Publications">
      <Wrapper>
        <Title>Publications</Title>
            {publications.map((publication) => <PublicationCard publication={publication} />)};
      </Wrapper>
    </Container>
  )
}

export default Publications;
