import React from 'react';

import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { Text } from '../components/Text';

export const LoginForm: React.FC = () => (
  <form onSubmit={(e) => e.preventDefault()}>
    <Heading>Log in</Heading>
    <Text>Log in with your email and password</Text>
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Button type="submit">Log in</Button>
  </form>
);
