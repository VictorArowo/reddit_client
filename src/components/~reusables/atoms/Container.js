import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
  display: flex;
  margin: 0px auto;
  ${props => (props.direction ? `flex-direction: ${props.direction};` : null)}
  ${props => (props.vCenter ? `justify-content: center;` : null)}
  ${props => (props.column ? `flex-direction: column;` : null)}
  ${props => (props.hCenter ? `align-items: center;` : null)}
  ${props =>
    Array.isArray(props.padding)
      ? `padding: ${props.padding[0]} ${props.padding[1]};`
      : null}
  ${props =>
    Array.isArray(props.padding) === false
      ? `padding: ${props.padding};`
      : null}
  ${props => (props.width ? `width: ${props.width};` : null)}
  ${props => (props.height ? `height: ${props.height};` : null)}
  ${props => (props.bgColor ? `background-color: ${props.bgColor};` : null)}
`;
