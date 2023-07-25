import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 10px;
`;

export const Card = styled.li`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
`;

export const Name = styled.p`
  font-weight: 500;
`;
