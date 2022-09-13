import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledMovieGallery = styled.ul`
  list-style: none;

  li {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin-bottom: 5px;
  }
`;
