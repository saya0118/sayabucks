import React, { useContext } from 'react';
import classnames from 'classnames';
import { OpenContext } from '../Context/OpenContext';
import styles from './Hamburger.module.css';

export const Hamburger: React.VFC = () => {
  // TODO: Rename to something else, probably hamburgerMenuStatus
  const open = useContext(OpenContext);

  // TODO: Refactor any other similar usages of styles that depend on boolean state, to use classnames, like this:
  const hamburgerStyles = classnames(styles.hamburger, {
    [styles.active]: open?.action,
  });

  return (
    <div
      className={styles.navbar}
      onClick={() => {
        if (!open) {
          return;
        }
        open.setAction(!open.action);
      }}
    >
      <div data-testid="hamburger" className={hamburgerStyles}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};
