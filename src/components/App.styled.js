import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 12px;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #f39014;
  box-shadow: 0px 4px 8px rgba(248, 193, 64, 0.5);
  background: linear-gradient(to right, #232526, #414345);

  > nav {
    display: flex;
    gap: 33px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #f8c140;
  font-weight: 500;
  font-size: 24px;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    color: black;
    background-color: #f39014;
    box-shadow: 0px 0px 30px rgb(12, 12, 10);
  }
`;
