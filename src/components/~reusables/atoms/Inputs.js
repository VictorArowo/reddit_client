import styled from 'styled-components';
import { small_space, normal_space, large_space } from '../variables/spacing';
import { base_font_size } from '../variables/font-sizes';
import { theme_secondary } from '../variables/colors';

export const Input = styled.input`
  appearance: none;
  display: inline-block;
  padding: ${normal_space};
  margin-bottom: ${normal_space};
  border-radius: 10px;
  font-size: ${base_font_size};
  font-weight: 600;
  border: 2px solid white;
  background-color: unset;
  color: white;
  outline: none;
  transition: all 200ms ease-in-out;

  ${props => (props.placeholder ? `placeholder: ${props.placeholder};` : null)}

  &::placeholder {
    color: white;
    opacity: 1;
  }

  &:focus,
  &:checked {
    border: 2px solid ${theme_secondary};
    box-shadow: 0 0 6px 0 rgba(19, 82, 221, 0.37);
  }
`;
