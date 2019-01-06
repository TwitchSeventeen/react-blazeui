import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { List, Container } from '../../../lib';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <List unstyled inline>
            <List.Item>
              <NavLink to="/" exact activeClassName={styles.isActive}>Home</NavLink>
            </List.Item>
            <List.Item>
              <NavLink to="/about" activeClassName={styles.isActive}>About</NavLink>
            </List.Item>
            <List.Item>
              <NavLink to="/solutions" activeClassName={styles.isActive}>Solutions</NavLink>
            </List.Item>
            <List.Item>
              <NavLink to="/pricing" activeClassName={styles.isActive}>Pricing</NavLink>
            </List.Item>
          </List>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
