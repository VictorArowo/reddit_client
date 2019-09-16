import styled from 'styled-components';
import { small_space, normal_space, large_space } from '../variables/spacing';
import { theme_primary } from '../variables/colors';

export const Post = styled.div`
  text-align: center;
  width: 80%;
  height: auto;
  background: ${theme_primary};
  border-radius: 20px;
  margin: 0px auto;
  margin-bottom: 50px;
  padding: 50px;
  color: white;
`;
