import styled from 'styled-components';

export const StyledReviews = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin-left: ${({ theme }) => theme.space[6]}px;
  }

  ul {
    list-style: none;

    li {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;
