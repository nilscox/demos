import React from 'react';

import { Demo } from '../../Demo';

import { SignupForm } from './SignupForm';

export const signupFormDemo = new Demo('SignupForm', {
  render: () => <SignupForm />,
});
