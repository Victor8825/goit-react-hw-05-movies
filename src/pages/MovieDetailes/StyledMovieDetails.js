import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  button {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    height: ${p => p.theme.space[8]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${({ theme }) => theme.radii.sm};
    padding: ${p => p.theme.space[4]}px;
    margin-left: ${p => p.theme.space[4]}px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
      color: white;
      background-color: orangered;
    }
  }
`;

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  img {
    object-fit: cover;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  section {
    margin-left: ${({ theme }) => theme.space[7]}px;
    margin-top: ${({ theme }) => theme.space[6]}px;
    color: orangered;
  }
`;
