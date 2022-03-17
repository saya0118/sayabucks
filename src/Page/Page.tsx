import React from 'react';
import styles from './Page.module.css';
import { MainTextBox } from '../MainTextBox';
import { Button } from '../Button';

export const Page = () => {
  return (
    <div className={styles.main}>
      <div
        className={`${styles['content-inner']} ${styles['height-short']} ${styles['background-green']}`}
      >
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} src="/143-77231.jpeg" />
          </div>
          <div className={styles['inner-content-description']}>
            <div
              className={`${styles['inner-content-container']} ${styles['font-white']}`}
            >
              <MainTextBox
                span={'Free faves are at your fingertips*'}
                description={''}
              />
              <Button className="green" text="Join Starbucks® Rewards" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-green']}`}
      >
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-description']}>
            <div
              className={`${styles['inner-content-container']} ${styles['font-white']}`}
            >
              <MainTextBox
                span={'Iced shaken awakening'}
                description={
                  'Introducing our new Iced Toasted Vanilla Oat Shaken Espresso with rich, creamy layers and nondairy goodness.'
                }
              />
              <Button className="green" text="Order now" />
            </div>
          </div>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} src="/143-77232.jpeg" />
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-green']}`}
      >
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} src="/143-77233.jpeg" />
          </div>
          <div className={styles['inner-content-description']}>
            <div
              className={`${styles['inner-content-container']} ${styles['font-white']}`}
            >
              <MainTextBox
                span={'Cheerfully chill'}
                description={
                  'Enjoy Strawberry Coconut Drink and Dragon Drink’s vibrant, fruity flavours with coconut beverage.'
                }
              />
              <Button className="green" text="Order now" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-mint']}`}
      >
        <div className={styles['content-flex']}>
          <div className={styles['content-colum']}>
            <div className={styles['content-colum-image']}>
              <img className={styles['main-img']} src="/143-77235.jpeg" />
            </div>
            <div className={styles['content-colum-description']}>
              <div
                className={`${styles['inner-content-container']} ${styles['font-green']}`}
              >
                <MainTextBox
                  span={'Your favorites. Your way.'}
                  description={
                    'Download the app to customize your drink, order ahead and earn Rewards.*'
                  }
                />
                <Button className="mint" text="Download the app" />
              </div>
            </div>
          </div>
          <div className={styles['content-colum']}>
            <div className={styles['content-colum-image']}>
              <img className={styles['main-img']} src="/143-77236.jpeg" />
            </div>
            <div className={styles['content-colum-description']}>
              <div
                className={`${styles['inner-content-container']} ${styles['font-green']}`}
              >
                <MainTextBox
                  span={'A good day, on its way'}
                  description={
                    'Get your favourites delivered with $3 off your order of $20 on Uber Eats thru 3/27.**'
                  }
                />
                <Button className="mint" text="Order now" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-mint']}`}
      >
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-description']}>
            <div
              className={`${styles['inner-content-container']} ${styles['font-green']}`}
            >
              <MainTextBox
                span={'Link. Order. Sip. Repeat'}
                description={
                  'Sip your way toward your next adventure when you link your Starbucks® Rewards and Aeroplan® accounts.'
                }
              />
              <Button className="mint" text="Get started" />
            </div>
          </div>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} src="/143-77403.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};
