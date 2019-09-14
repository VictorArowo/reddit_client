import React from 'react';
import { View } from './~reusables/atoms/View';
import { H2, Text } from './~reusables/atoms/Text';
import { ButtonPrimary } from './~reusables/atoms/Buttons';
import { Form } from './~reusables/molecules/Form';
import { Container } from './~reusables/atoms/Container';
import { Input } from './~reusables/atoms/Inputs';
import { Link } from 'react-router-dom';
import {
  theme_primary,
  theme_dark
} from '../components/~reusables/variables/colors';

const Login = () => {
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
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
        </Form>
        <ButtonPrimary light>
          <Link to="/login">Log in</Link>
        </ButtonPrimary>
      </Container>
    </View>
  );
};

export default Login;
