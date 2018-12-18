import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Breadcrumbs from './index';

describe('Breadcrumbs', () => {
  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Breadcrumbs>
          <Breadcrumbs.Item>
            <a href="#">lorem</a>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <a href="#">ipsum</a>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item active>
            dolor
          </Breadcrumbs.Item>
        </Breadcrumbs>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
