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
            <input
              id="acd-check1"
              className={styles['acd-check']}
              type="checkbox"
            />
            <label htmlFor="acd-check1" className={`${styles['arrow-btn']}`}>
              <img
                className={styles['arrow-img']}
                src={logoArrow}
                data-testid="footer-about-starbucks-arrow"
              />
            </label>
            <ul className={`${styles['list-ul']} ${styles['acd-content']}`}>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Our Company</a>
              </li>
              <li className={styles['footer-list']}>
                <a
                  className={styles['footer-link']}
                  href="https://www.starbucks.ca/coffee/"
                >
                  Our Coffee
                </a>
              </li>
              <li className={styles['footer-list']}>
                <a
                  className={styles['footer-link']}
                  href="https://www.starbucks.ca/coffee/"
                >
                  Stories and News
                </a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Investor Relations</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Customer Service</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['flex-box']}`}>
            <h1 className={styles.title}>Careers</h1>
            <input
              id="acd-check2"
              className={styles['acd-check']}
              type="checkbox"
            />
            <label
              htmlFor="acd-check2"
              className={`${styles['arrow-btn']} ${styles['acd-label']}`}
            >
              <img className={styles['arrow-img']} src={logoArrow} />
            </label>
            <ul className={`${styles['list-ul']} ${styles['acd-content']}`}>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Culture and Values</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Diversity and Inclusion</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Work at Starbucks</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Corporate Careers</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Retail Careers</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>Social Impact</h1>
            <input
              id="acd-check3"
              className={styles['acd-check']}
              type="checkbox"
            />
            <label
              htmlFor="acd-check3"
              className={`${styles['arrow-btn']} ${styles['acd-label']}`}
            >
              <img className={styles['arrow-img']} src={logoArrow} />
            </label>
            <ul className={`${styles['list-ul']} ${styles['acd-content']}`}>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Overview</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>People</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Planet</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>
                  Environmental and Social Impact Reporting
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>For Business Partners</h1>
            <input
              id="acd-check4"
              className={styles['acd-check']}
              type="checkbox"
            />
            <label
              htmlFor="acd-check4"
              className={`${styles['arrow-btn']} ${styles['acd-label']}`}
            >
              <img className={styles['arrow-img']} src={logoArrow} />
            </label>
            <ul className={`${styles['list-ul']} ${styles['acd-content']}`}>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>
                  Corporate Gift Card Sales
                </a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Branded Solutions</a>
              </li>
            </ul>
          </div>
          <div className={`${styles['ul-margin']} ${styles['flex-box']}`}>
            <h1 className={styles.title}>Order and pickup</h1>
            <input
              id="acd-check5"
              className={styles['acd-check']}
              type="checkbox"
            />
            <label
              htmlFor="acd-check5"
              className={`${styles['arrow-btn']} ${styles['acd-label']}`}
            >
              <img className={styles['arrow-img']} src={logoArrow} />
            </label>
            <ul className={`${styles['list-ul']} ${styles['acd-content']}`}>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Order on the App</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Order on the Web</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>Delivery</a>
              </li>
              <li className={styles['footer-list']}>
                <a className={styles['footer-link']}>
                  Order and Pickup Options
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles['footer-bottom']}>
          <ul className={styles['footer-list-flex']}>
            <li className={styles['footer-list-icon']}>
              <button className={styles['footer-list-button']}>
                <img className={styles.icon} src={logoFacebook} />
              </button>
            </li>
            <li className={styles['footer-list-icon']}>
              <button className={styles['footer-list-button']}>
                <img className={styles.icon} src={logoInstagram} />
              </button>
            </li>
            <li className={styles['footer-list-icon']}>
              <button className={styles['footer-list-button']}>
                <img className={styles.icon} src={logoTwitter} />
              </button>
            </li>
          </ul>
          <div className={styles['footer-flex-box']}>
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
          </div>
          <p className={styles['language-box']}>
            <a className={styles.language}>Passer au site français</a>
          </p>
          <p className={styles.copyright}>
            This is not related to Starbucks Coffee Company. This is just a
            personal project.
          </p>
        </div>
      </div>
    </div>
  );
};
