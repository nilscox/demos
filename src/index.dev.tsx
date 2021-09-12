/* eslint-disable react/display-name */
import React, { ComponentProps, FC } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import { Demos, DemosGroup } from './index';

const Button: FC<ComponentProps<'button'>> = (props) => (
  <button
    {...props}
    style={{
      padding: '3px 12px',
      border: '1px solid #CCC',
      cursor: props.disabled ? undefined : 'pointer',
    }}
  />
);

const Input: FC<ComponentProps<'input'>> = (props) => (
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

const demos: DemosGroup = {
  Elements: {
    Button: {
      default: {
        render: () => <Button>click me</Button>,
      },
      disabled: {
        render: () => <Button disabled>click me</Button>,
      },
    },
    Input: {
      default: {
        description: 'default input',
        render: () => <Input placeholder="type something..." />,
      },
      defaultValue: {
        description: 'input with default value',
        render: () => <Input defaultValue="some text" placeholder="type something..." />,
      },
      password: {
        description: 'password input',
        render: () => <Input type="password" placeholder="enter your password" />,
      },
    },
  },
  Forms: {
    Login: {
      loginForm: {
        render: () => (
          <form onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button type="submit">Log in</Button>
          </form>
        ),
      },
    },
    Signup: {
      signupForm: {
        render: () => (
          <form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="phone" placeholder="Phone number" />
            <Button type="submit">Sign up</Button>
          </form>
        ),
      },
    },
  },
};

ReactDOM.render(<Demos title="Demos demo" demos={demos} />, document.getElementById('app'));
