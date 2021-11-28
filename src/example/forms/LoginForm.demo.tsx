import React from 'react';

import { Demo } from '../../Demo';

import { LoginForm } from './LoginForm';

export const loginFormDemo = new Demo('LoginForm', {
  render: () => <LoginForm />,
});
