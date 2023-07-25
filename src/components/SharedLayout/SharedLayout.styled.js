import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  color: #2a2a2a;

  &.active {
    color: #ff553d;
  }
`;
