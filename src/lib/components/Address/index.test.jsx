import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Address from './index';

describe('Address', () => {
  it('should be defined', () => {
    expect(Address).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Address>
        10010 The Street,
        <br />
        {' '}
        Binary Town,
        <br />
        {' '}
        Offandon City,
      </Address>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
