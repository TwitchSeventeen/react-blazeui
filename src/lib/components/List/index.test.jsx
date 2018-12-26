import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import List from './index';

describe('List', () => {
  it('should be defined', () => {
    expect(List).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <List>
          <List.Item>lorem</List.Item>
          <List.Item>ipsum</List.Item>
          <List.Item>dolor</List.Item>
        </List>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly an ordered list', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <List ordered>
          <List.Item>lorem</List.Item>
          <List.Item>ipsum</List.Item>
          <List.Item>dolor</List.Item>
        </List>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly an unstyled list', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <List unstyled>
          <List.Item>lorem</List.Item>
          <List.Item>ipsum</List.Item>
          <List.Item>dolor</List.Item>
        </List>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly an inline list', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <List inline>
          <List.Item>lorem</List.Item>
          <List.Item>ipsum</List.Item>
          <List.Item>dolor</List.Item>
        </List>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
