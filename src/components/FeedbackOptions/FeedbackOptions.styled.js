import styled from 'styled-components';

export const StyledFeedbackOptions = styled.div`
  button {
    border-radius: ${p => p.theme.radii.sm};
    border: 1px solid grey;
  }

  button:hover {
    background-color: #42aaf5;
    border: ${p => p.theme.borders.none};
  }
`;
