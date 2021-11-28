import React from 'react';

import { Demo } from '../../Demo';

import { Heading } from './Heading';

export const headingDemo = new Demo('Heading', {
  render: () => <Heading>Title example</Heading>,
});
