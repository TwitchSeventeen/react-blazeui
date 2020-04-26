import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CountUp from 'react-countup';

function Counter(props) {
  const {
    className, start, value, duration, delay, prefix, dataName, suffix, onStart, onEnd, ...other
  } = props;
  const classes = classNames(
    'c-counter',
    'u-super',
    'u-text--mono',
    className,
  );

  return (
    <div className={classes} data-name={dataName}>

      { prefix
            && <span className="c-counter__prefix">{prefix}</span>}

      <CountUp
        {...other}
        className="c-counter__amount"
        start={start}
        end={value}
        duration={duration}
        delay={delay}
        onStart={onStart}
        onEnd={onEnd}
      />

      { suffix
        && <span className="c-counter__suffix u-text--quiet u-xsmall">{suffix}</span>}

    </div>
  );
}

Counter.propTypes = {
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * The initial value of the counter
   */
  start: PropTypes.number,
  /**
   * The ending value of the counter
   */
  value: PropTypes.number,
  /**
   * The time in seconds the transition runs
   */
  duration: PropTypes.number,
  /**
   * The delay in seconds before starting
   */
  delay: PropTypes.number,
  /**
   * Text to go before the value
   */
  prefix: PropTypes.string,
  /**
   * Text to go after the value
   */
  suffix: PropTypes.string,
  /**
   * Function called on transition start
   */
  onStart: PropTypes.func,
  /**
   * Function called on transition end
   */
  onEnd: PropTypes.func,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Counter.defaultProps = {
  className: null,
  start: 0,
  value: 0,
  duration: null,
  delay: null,
  prefix: null,
  suffix: null,
  onStart: undefined,
  onEnd: undefined,
  dataName: 'counter',
};

export default Counter;
