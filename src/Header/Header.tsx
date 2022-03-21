import React from 'react';
import styles from './Header.module.css';
import { Item } from '../Item';
import { Button } from '../Button';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles['content-container']}>
          <Logo />
          <div className={styles['hamburger-menu']}>
            {/* <input className={styles['menu-button-check']}> */}
            <label className={styles['menu-btn']}>
              <span></span>
            </label>
            {/* </input> */}
          </div>
          <div
            className={`${styles['flex-container']} ${styles['nav-items-wrapper']}`}
          >
            <div className={styles['items-left-wrapper']}>
              <div className={styles['items-list-wrapper']}>
                <ul className={styles['items-ul']}>
                  <li className={styles['items-list']}>
                    <Item text="menu" url="/menu" />
                  </li>
                  <li
                    className={`${styles['items-list']} ${styles['padding-left']}`}
                  >
                    <Item text="rewards" url="/rewards" />
                  </li>
                  <li
                    className={`${styles['items-list']} ${styles['padding-left']}`}
                  >
                    <Item text="gift cards" url="/gift" />
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles['items-ul']} ${styles['items-right-wrapper']}`}
            >
              <div className={styles['items-right-list']}>
                <a className={styles['items-right-text']}>
                  <svg className={styles['map-location']}>
                    <path
                      className="path"
                      d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"
                    ></path>
                  </svg>
                  Find a store
                </a>
                <Button className="white" text="Sign in" />
                <Button className="black" text="Join now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
