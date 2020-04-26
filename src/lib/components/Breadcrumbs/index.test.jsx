import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Breadcrumbs from './index';

describe('Breadcrumbs', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <a href="/lorem">lorem</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a href="/ipsum">ipsum</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item active>
          dolor
        </Breadcrumbs.Item>
      </Breadcrumbs>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
