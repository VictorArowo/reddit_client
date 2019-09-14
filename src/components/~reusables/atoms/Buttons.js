import styled from 'styled-components';
import { small_space, normal_space, large_space } from '../variables/spacing';
import { white, theme_primary } from '../variables/colors';

export const Button = styled.button`
  min-height: 5rem;
  padding: ${normal_space} ${large_space};
  font-size: 30px;
  font-weight: 600;
  width: 200px;
  margin: 0px auto;
  background-color: ${white};
  border: none;
  outline: none;
  margin-bottom: ${normal_space};
  border-radius: ${small_space};
  box-shadow: 0 0.8rem 2.5rem 0 rgba(40, 51, 63, 0.11);
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:active {
    opacity: 0.8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${theme_primary};
  color: ${white};
  text-decoration: none;
`;

export const TextButton = styled(Button)`
  background-color: unset;
  box-shadow: unset;
  padding: ${normal_space};

  &:active {
    opacity: 0.8;
    box-shadow: unset;
  }
`;

export const TextButtonPrimary = styled(TextButton)`
  color: #3897f0;
`;
