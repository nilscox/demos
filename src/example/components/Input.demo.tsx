import React from 'react';

import { Demo } from '../../Demo';

import { Input } from './Input';

export const inputDemo = new Demo('Input', {
  render: () => <Input placeholder="type something..." />,
  variants: [
    {
      description: 'input with default value',
      render: () => <Input defaultValue="some text" placeholder="type something..." />,
    },
    {
      description: 'Password input',
      render: () => <Input type="password" placeholder="enter your password" />,
    },
  ],
});
