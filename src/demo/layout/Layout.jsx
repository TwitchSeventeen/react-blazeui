import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import styles from './styles.module.css';

function Layout(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
