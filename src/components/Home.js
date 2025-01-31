import React from 'react';
import { View } from './~reusables/atoms/View';
import { H2, Text } from './~reusables/atoms/Text';
import { ButtonPrimary } from './~reusables/atoms/Buttons';
import { small_space } from './~reusables/variables/spacing';
import { Container } from './~reusables/atoms/Container';
import { Link } from 'react-router-dom';
import {
  theme_primary,
  theme_dark
} from '../components/~reusables/variables/colors';

const Home = () => {
  return (
    <View direction="row">
      <Container
        bgColor={theme_primary}
        width="50%"
        height="100vh"
        direction="column"
        hCenter
      >
        <img
          src="/img/snoo2.png"
          alt="reddit-logo"
          width="200px"
          height="auto"
        />
        <H2 light margin="auto">
          the reddit client.
        </H2>
      </Container>

      <Container
        bgColor={theme_dark}
        height="100vh"
        width="50%"
        direction="column"
      >
        <Text light margin="auto">
          a lightweight reddit client
        </Text>
        <ButtonPrimary light>
          <a href="https://www.reddit.com/api/v1/authorize?client_id=GQHIk4x1kGDG4g&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/frontpage&duration=permanent&scope=*">
            Login
          </a>
        </ButtonPrimary>

        <Text light margin={`auto auto ${small_space} auto`}>
          With{' '}
          <span role="img" aria-label="love">
            ♥🤎❤❣💓💝
          </span>{' '}
          by Victor Arowo
        </Text>
      </Container>
    </View>
  );
};

export default Home;
