import React from 'react';
import ReactDOM from 'react-dom';

import { Demo } from '../Demo';
import { DemosGroup } from '../DemoGroup';
import { Demos } from '../index';

import { buttonDemo } from './components/Button.demo';
import { headingDemo } from './components/Heading.demo';
import { inputDemo } from './components/Input.demo';
import { textDemo } from './components/Text..demo';
import { loginFormDemo } from './forms/LoginForm.demo';
import { signupFormDemo } from './forms/SignupForm.demo';

import '../styles.css';

type Config = {
  foo: number;
};

const examples = new DemosGroup<Config>(
  'Examples',
  [
    new Demo('Example1', {
      render: ({ foo }) => <>example 1, foo = {foo}</>,
    }),
    new Demo('Example2', {
      configure: (props) => ({
        ...props,
        foo: props.foo + 18,
      }),
      render: ({ foo }) => <>example 2, foo = {foo}</>,
    }),
  ],
  (props) => ({
    ...props,
    foo: props.foo + 9,
  }),
);

const typographiesDemosGroup = new DemosGroup('Typographies', [headingDemo, textDemo]);
const elementsDemosGroup = new DemosGroup('Elements', [typographiesDemosGroup, buttonDemo, inputDemo]);
const formsDemosGroup = new DemosGroup('Forms', [loginFormDemo, signupFormDemo]);

const demos = [examples, elementsDemosGroup, formsDemosGroup];

const configure = () => ({ foo: 42 });

ReactDOM.render(
  <Demos title="Demos example" demos={demos} configure={configure} />,
  document.getElementById('app'),
);
