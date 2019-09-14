import styled from 'styled-components';

export const View = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;

  ${props => (props.direction ? `flex-direction: ${props.direction};` : null)}
  ${props => (props.vCenter ? `justify-content: center;` : null)}
  ${props => (props.hCenter ? `align-items: center;` : null)}
  ${props => (props.bgColor ? `background-color: ${props.bgColor};` : null)}
`;
