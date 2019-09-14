import styled from 'styled-components';
import { normal_space, medium_space } from '../variables/spacing';
import {
  base_font_size,
  small_font_size,
  h2_font_size
} from '../variables/font-sizes';
import { white } from '../variables/colors';

export const Text = styled.p`
  font-size: ${base_font_size};
  line-height: 2.8rem;
  margin-bottom: ${medium_space};

  ${props => (props.light ? `color: ${white};` : null)}
  ${props => (props.margin ? `margin: ${props.margin};` : null)}
`;

export const SmallText = styled(Text)`
  font-size: ${small_font_size};
  margin-bottom: ${normal_space};

  ${props => (props.light ? `color: ${white};` : null)}
  ${props => (props.margin ? `margin: ${props.margin};` : null)}
`;

export const H2 = styled.h2`
  font-size: ${h2_font_size};
  margin-bottom: ${normal_space};

  ${props => (props.light ? `color: ${white};` : null)}
  ${props => (props.bold ? `font-weight: bold;` : null)}
  ${props => (props.margin ? `margin: ${props.margin};` : null)}
  ${props => (props.noMargin ? `margin: 0;` : null)}
  ${props => (props.color ? `color: ${props.color};` : null)}
`;
