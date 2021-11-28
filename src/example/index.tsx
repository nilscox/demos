import React from 'react';
import ReactDOM from 'react-dom';

import { DemosGroup } from '../DemoGroup';
import { Demos } from '../index';

import { buttonDemo } from './components/Button.demo';
import { headingDemo } from './components/Heading.demo';
import { inputDemo } from './components/Input.demo';
import { textDemo } from './components/Text..demo';
import { loginFormDemo } from './forms/LoginForm.demo';
import { signupFormDemo } from './forms/SignupForm.demo';

import '../styles.css';

const elementsDemosGroup = new DemosGroup('Elements', [
  new DemosGroup('Typographies', [headingDemo, textDemo]),
  buttonDemo,
  inputDemo,
]);

const formsDemosGroup = new DemosGroup('Forms', [loginFormDemo, signupFormDemo]);

const demos = [elementsDemosGroup, formsDemosGroup];

ReactDOM.render(<Demos title="Demos example" demos={demos} />, document.getElementById('app'));
