import React, { useContext } from 'react';
import { OpenContext } from '../Context/OpenContext';
import styles from './SlideMenu.module.css';
import { Item } from '../Item';
import { Button } from '../Button';

// eslint-disable-next-line import/no-unresolved
import logoArrow from '/svgexport-3.svg';

export const SlideMenu: React.VFC = () => {
  const open = useContext(OpenContext);
  return (
    <div
      className={`${styles['menu-page']} ${open?.action ? styles.open : ''}`}
    >
      <nav id="nav" className={styles.nav}>
        <ul className={styles['items-ul']}>
          <li className={styles['items-list']}>
            <button className={styles['button-menu']}>
              Menu
              <img className={styles['arrow-img']} src={logoArrow} />
            </button>
          </li>
          <li className={`${styles['items-list']} ${styles['padding-left']}`}>
            <Item text="rewards" url="/rewards" fontWeight="font-menu" />
          </li>
          <li className={`${styles['items-list']} ${styles['padding-left']}`}>
            <Item text="gift cards" url="/gift" fontWeight="font-menu" />
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
      <div className={styles['nav-block']}>
        <Button className="white" text="Sign in" />
        <Button className="black" text="Join now" />
        <div className={styles['link-box']}>
          <a className={styles['items-right-text']}>
            <svg className={styles['map-location']}>
              <path
                className="path"
                d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"
              ></path>
            </svg>
            Find a store
          </a>
        </div>
      </div>
    </div>
  );
};
