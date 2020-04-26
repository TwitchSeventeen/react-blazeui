import React from 'react';
import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import Title from './index';

describe('Title', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Title).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
        <Title active onClick={jest.fn()}>
          lorem ipsum dolor
        </Title>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  /**
   * handleClick
   */
  it('can handle handleClick', () => {
    const onClick = jest.fn();

    render(
        <Title
            active
            onClick={onClick}
            data-testid="accordion-title"
        >
          lorem ipsum dolor
        </Title>
    );

    const container = document.body;
    const clickTitle = getByTestId(container, 'accordion-title');
    fireEvent.click(clickTitle);

    expect(onClick).toHaveBeenCalled();
  });
});

