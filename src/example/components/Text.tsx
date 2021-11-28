import React, { ComponentProps } from 'react';

export const Text: React.FC<ComponentProps<'p'>> = (props) => (
  <p {...props} style={{ color: '#222222', ...props.style }} />
);
