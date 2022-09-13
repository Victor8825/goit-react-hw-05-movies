import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSharedLayout = styled.div`
  position: sticky;
  z-index: 1100;
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &.active {
    color: white;
    background-color: orangered;
  }
`;
