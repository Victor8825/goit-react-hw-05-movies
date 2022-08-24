import styled from 'styled-components';
import searchIcon from '../../components/images/searchIcon.svg';

export const StyledSearchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[9]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.sm};
    overflow: hidden;
  }

  button {
    display: inline-block;
    width: ${p => p.theme.space[8]}px;
    height: ${p => p.theme.space[8]}px;
    border: ${p => p.theme.borders.none};
    background-image: url(${searchIcon});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  button:hover {
    opacity: 1;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: ${p => p.theme.space[0]}px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: ${p => p.theme.borders.none};
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: ${p => p.theme.borders.none};
    outline: none;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
