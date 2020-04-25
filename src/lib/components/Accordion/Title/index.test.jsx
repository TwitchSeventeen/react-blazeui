import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
    const onClickProp = jest.fn();
    const wrapper = shallow(<Title active onClick={onClickProp}/>);

    wrapper.instance().handleClick();

    expect(onClickProp).toHaveBeenCalled();
  });
});

