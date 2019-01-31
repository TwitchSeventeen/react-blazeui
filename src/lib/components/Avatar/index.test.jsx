import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Avatar from './index';

describe('Avatar', () => {
  it('should be defined', () => {
    expect(Avatar).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Avatar alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF" size="super" />);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with two images', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Avatar alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF" alt2="placeholder" src2="http://placehold.it/1024x963/BADA55/FFF" size="super" />);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with initials', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Avatar initials="LKO" />);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
