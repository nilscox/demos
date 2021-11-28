import React from 'react';

import { Demo } from '../../Demo';

import { Button } from './Button';

export const buttonDemo = new Demo('Button', {
  render: () => <Button>click me</Button>,
  variants: [
    {
      description: 'A button in disabled state.',
      render: () => <Button disabled>{"don't click me"}</Button>,
    },
  ],
});
