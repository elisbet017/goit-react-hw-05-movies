import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  color: #b20000;
  margin-left: 30px;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  margin-left: 30px;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 7px;
  }
`;

export const MovieLink = styled(Link)`
  color: #2a2a2a;
  font-weight: 500;

  &:hover {
    color: #ff553d;
  }
`;
