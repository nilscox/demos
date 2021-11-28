import React, { ComponentProps } from 'react';

export const Input: React.FC<ComponentProps<'input'>> = (props) => (
  <input
    {...props}
    style={{
      display: 'block',
      margin: '6px 0',
      padding: '3px 6px',
      border: '1px solid #CCC',
      ...props.style,
    }}
  />
);
