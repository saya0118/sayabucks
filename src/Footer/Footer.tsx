import React from 'react';
import styles from './Footer.module.css';
// eslint-disable-next-line import/no-unresolved
import logoFacebook from '/svgexport-6.svg';
// eslint-disable-next-line import/no-unresolved
import logoInstagram from '/svgexport-7.svg';
// eslint-disable-next-line import/no-unresolved
import logoTwitter from '/svgexport-8.svg';
// eslint-disable-next-line import/no-unresolved
import logoArrow from '/svgexport-5.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-top']}>
          <div className={styles['flex-box']}>
            <h1 className={styles.title}>About Starbucks</h1>
            <button className={styles['arrow-btn']}>
              <img className={styles['arrow-img']} src={logoArrow} />
            </button>
            <ul className={styles['list-ul']}>
              <li className={styles['footer-list']}>
                <a>Our Company</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Our Coffee</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Stories and News</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Investor relations</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Customer Service</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>Careers</h1>
            <button className={styles['arrow-btn']}>
              <img className={styles['arrow-img']} src={logoArrow} />
            </button>
            <ul className={styles['list-ul']}>
              <li className={styles['footer-list']}>
                <a>Culture and Values</a>
              </li>
              <li className={styles['footer-list']}>
                <a>diversity and Inclusion</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Work at Starbucks</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Corporate Careers</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Retail Careers</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>Social Impact</h1>
            <button className={styles['arrow-btn']}>
              <img className={styles['arrow-img']} src={logoArrow} />
            </button>
            <ul className={styles['list-ul']}>
              <li className={styles['footer-list']}>
                <a>Overview</a>
              </li>
              <li className={styles['footer-list']}>
                <a>People</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Planet</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Environmental and Social Impact Reporting</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>For Business Partners</h1>
            <button className={styles['arrow-btn']}>
              <img className={styles['arrow-img']} src={logoArrow} />
            </button>
            <ul className={styles['list-ul']}>
              <li className={styles['footer-list']}>
                <a>Corporate Gift Card Sales</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Branded Solutions</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>Order and pickup</h1>
            <button className={styles['arrow-btn']}>
              <img className={styles['arrow-img']} src={logoArrow} />
            </button>
            <ul className={styles['list-ul']}>
              <li className={styles['footer-list']}>
                <a>Order on the App</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Order on the Web</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Delivery</a>
              </li>
              <li className={styles['footer-list']}>
                <a>Order and Pickup Options</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div>
            <ul className={styles['footer-list-flex']}>
              <li className={styles['footer-list-icon']}>
                <a>
                  <img className={styles.icon} src={logoFacebook} />
                </a>
              </li>
              <li className={styles['footer-list-icon']}>
                <a>
                  <img className={styles.icon} src={logoInstagram} />
                </a>
              </li>
              <li className={styles['footer-list-icon']}>
                <a>
                  <img className={styles.icon} src={logoTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <ul className={styles['footer-flex']}>
            <li className={`${styles.list} ${styles['padding-right']}`}>
              <a>Privacy Statement</a>
            </li>
            <span className={styles.line}>|</span>
            <li className={`${styles.list} ${styles['padding-both']}`}>
              <a>Terms of Use</a>
            </li>
            <span className={styles.line}>|</span>
            <li className={`${styles.list} ${styles['padding-both']}`}>
              <a>Partners</a>
            </li>
          </ul>
          <p className={styles['language-box']}>
            <a className={styles.language}>Passer au site français</a>
          </p>
          <p className={styles.copyright}>
            © 2022 This is not related to Starbucks Coffee Company. This is just
            personal project.
          </p>
        </div>
      </div>
    </div>
  );
};
