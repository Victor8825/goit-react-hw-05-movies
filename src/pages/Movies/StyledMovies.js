import styled from 'styled-components';

export const StyledMovies = styled.div`
  form {
    width: 100%;
    max-width: 400px;
    height: 150px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    display: flex;
    gap: ${({ theme }) => theme.space[3]}px;
    margin-left: ${p => p.theme.space[7]}px;
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.sm};
  }

  input {
    border-radius: ${({ theme }) => theme.radii.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    outline: none;
    border: none;
    padding: ${({ theme }) => theme.space[2]}px;
    width: 100%;
    height: auto;
    background-color: #bdf2bb;
  }

  button {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    height: ${p => p.theme.space[8]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${({ theme }) => theme.radii.sm};

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
