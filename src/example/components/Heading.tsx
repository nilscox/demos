import React, { ComponentProps, FC } from 'react';

export const Heading: FC<ComponentProps<'h2'>> = (props) => (
  <h2
    {...props}
    style={{
      color: '#000099',
      fontSize: '1.5rem',
      ...props.style,
    }}
  />
);
