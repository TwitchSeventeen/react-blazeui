import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Title from './index';

describe('Title', () => {
  it('should be defined', () => {
    expect(Title).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Title active onClick={jest.fn()}>
          lorem ipsum dolor
        </Title>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
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

