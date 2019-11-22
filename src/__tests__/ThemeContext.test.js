import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeContext, ThemeContextContainer, ThemeContextInitialValue } from '../ThemeContext';

const PropsTester = () => null;

test('Test initial state', () => {
  const component = renderer.create(
    <ThemeContextContainer>
      <ThemeContext.Consumer>
        {props => (<PropsTester {...props} />)}
      </ThemeContext.Consumer>
    </ThemeContextContainer>
  );

  const tester = component.root.findByType(PropsTester);

  expect(tester.props.theme).toBe(ThemeContextInitialValue.theme);
  expect(typeof tester.props.toggleTheme).toBe('function');
});