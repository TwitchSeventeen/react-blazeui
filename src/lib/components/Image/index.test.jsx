import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Image from './index';

describe('Image', () => {
  it('should be defined', () => {
    expect(Image).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Image
        height={100}
        width={50}
      />,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a picture liked by a user', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Image
        user="twitchseventeen"
        filter="lorem"
        likes

      />,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a explicit picture', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Image
        src="https://via.placeholder.com/150"
        alt="alt text"
      />,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
