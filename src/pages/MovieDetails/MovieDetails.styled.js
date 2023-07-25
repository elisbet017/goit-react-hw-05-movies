import styled from 'styled-components';

export const Button = styled.button`
  height: 28px;
  margin-left: 2px;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
  background-color: #ff553d;
  color: white;
  transition: all 150ms ease-in;

  &:hover {
    cursor: pointer;
    background-color: #b20000;
  }
`;

export const FilmTitle = styled.h2`
  color: #b20000;
  margin-bottom: 10px;
  max-width: 650px;
`;

export const Info = styled.section`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const Text = styled.p`
  max-width: 650px;
  &:nth-of-type(even) {
    font-weight: 500;
  }
  margin-bottom: 10px;
`;

export const LinksBlock = styled.section`
  padding: 8px 0 8px 3px;
  border-bottom: 1px solid #bdbdbd;
`;
