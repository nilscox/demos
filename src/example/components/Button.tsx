import React, { ComponentProps, FC } from 'react';

export const Button: FC<ComponentProps<'button'>> = (props) => (
  <button
    {...props}
    style={{
      padding: '3px 12px',
      border: '1px solid #CCC',
      cursor: props.disabled ? undefined : 'pointer',
    }}
  />
);
