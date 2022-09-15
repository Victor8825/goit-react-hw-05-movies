import styled from 'styled-components';

export const StyledCast = styled.ul`
  list-style: none;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin-left: ${({ theme }) => theme.space[6]}px;
  }

  li {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
