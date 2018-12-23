import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Accordion from './index';

describe('Accordion', () => {
  it('should be defined', () => {
    expect(Accordion).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Accordion>
          lorem ipsum dolor
        </Accordion>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

