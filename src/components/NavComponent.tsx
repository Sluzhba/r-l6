import React from 'react';
import { NavLink } from 'react-router';
import styles from '../assets/Navigation.module.css';

interface NavigationItem {
  path: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      {navigationItems.map((item) => (
        <NavLink 
          key={item.path}
          to={item.path} 
          className={styles.link}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;