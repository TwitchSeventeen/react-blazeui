import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Field from './index';

describe('Field', () => {
  it('should be defined', () => {
    expect(Field).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Field>
          lorem ipsum dolor
        </Field>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
