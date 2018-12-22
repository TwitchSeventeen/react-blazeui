import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Pass props to onClick when button is clicked
   * @param event
   */
  handleClick(event) {
    const { onClick } = this.props;

    onClick(event, this.props);
  }

  render () {
    const { children, className, active } = this.props;
    const classes = classNames('c-card__control', className);
    return (
        <button
            type="button"
            role="heading"
            aria-expanded={active.toString()}
            className={classes}
            onClick={this.handleClick}
        >
          {children}
        </button>
    );
  }
}

Title.propTypes = {
  /**
   * Whether this is the active item
   */
  active: PropTypes.bool,
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * The index of the title in the accordion
   */
  index: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
  ]),
  /**
   * Function called when button is clicked
   */
  onClick: PropTypes.func,
};

Title.defaultProps = {
  children: null,
  className: null,
  active: false,
  index: null,
  onClick: null,
};

export default Title;