import React from 'react';

import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { Text } from '../components/Text';

export const SignupForm: React.FC = () => (
  <form onSubmit={(e) => e.preventDefault()}>
    <Heading>Sign up</Heading>
    <Text>Create a new account</Text>
    <Input type="text" placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Input type="phone" placeholder="Phone number" />
    <Button type="submit">Sign up</Button>
  </form>
);
