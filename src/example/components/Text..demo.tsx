import React from 'react';

import { Demo } from '../../Demo';

import { Text } from './Text';

export const textDemo = new Demo('Text', {
  render: () => <Text>Lorem ipsum dolor sit amet...</Text>,
});
