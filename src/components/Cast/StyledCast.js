import styled from 'styled-components';

export const StyledCast = styled.ul`
  list-style: none;

  li {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
