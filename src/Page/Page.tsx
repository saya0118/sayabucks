import React from 'react';
import styles from './Page.module.css';
import { MainTextBox } from '../MainTextBox';
import { Button } from '../Button';

export const Page = () => {
  return (
    <div className={styles.main}>
      <div
        className={`${styles['content-inner']} ${styles['.split']} ${styles['background-green']}`}
      >
        <div
          className={`${styles['inner-content-image']} ${styles['split-item']}`}
        >
          <img className={styles['main-img']} src="/143-77231.jpeg" />
        </div>
        <div
          className={`${styles['inner-content-description']} ${styles['split-item']}`}
        >
          <div
            className={`${styles['inner-content-container']} ${styles['font-white']}`}
          >
            <MainTextBox
              span={'Free faves are at your fingertips*'}
              titleSize={'font-mid'}
              description={''}
              descriptionSize={''}
            />
            <Button className="green" text="Join Starbucks® Rewards" />
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-green']} ${styles['.split']}`}
      >
        <div
          className={`${styles['inner-content-image']} ${styles['split-item']}`}
        >
          <img className={styles['main-img']} src="/143-77232.jpeg" />
        </div>
        <div
          className={`${styles['inner-content-description']} ${styles['split-item']}`}
        >
          <div
            className={`${styles['inner-content-container']} ${styles['font-white']}`}
          >
            <MainTextBox
              span={'Iced shaken awakening'}
              titleSize={'font-lg'}
              description={
                'Introducing our new Iced Toasted Vanilla Oat Shaken Espresso with rich, creamy layers and nondairy goodness.'
              }
              descriptionSize={'font-mid'}
            />
            <Button className="green" text="Order now" />
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-green']} ${styles['.split']}`}
      >
        <div
          className={`${styles['inner-content-image']} ${styles['split-item']}`}
        >
          <img className={styles['main-img']} src="/143-77233.jpeg" />
        </div>
        <div
          className={`${styles['inner-content-description']} ${styles['split-item']}`}
        >
          <div
            className={`${styles['inner-content-container']} ${styles['font-white']}`}
          >
            <MainTextBox
              span={'Cheerfully chill'}
              titleSize={'font-lg'}
              description={
                'Enjoy Strawberry Coconut Drink and Dragon Drink’s vibrant, fruity flavours with coconut beverage.'
              }
              descriptionSize={'font-mid'}
            />
            <Button className="green" text="Order now" />
          </div>
        </div>
      </div>
      <div className={`${styles['content-colum']} ${styles['.split']}`}>
        <div
          className={`${styles['split-item']} ${styles['responsive-split']}`}
        >
          <div
            className={`${styles['content-colum-inner-left']} ${styles['background-mint']}`}
          >
            <div className={styles['content-colum-image']}>
              <img className={styles['main-img']} src="/143-77235.jpeg" />
            </div>
            <div className={styles['content-colum-description']}>
              <div
                className={`${styles['inner-content-container']} ${styles['font-green']}`}
              >
                <MainTextBox
                  titleSize={'font-mid'}
                  span={'Your favorites. Your way.'}
                  description={
                    'Download the app to customize your drink, order ahead and earn Rewards.*'
                  }
                  descriptionSize={'font-sml'}
                />
                <Button className="mint" text="Download the app" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles['split-item']} ${styles['responsive-split']}`}
        >
          <div
            className={`${styles['content-colum-inner-right']} ${styles['background-mint']}`}
          >
            <div className={styles['content-colum-image']}>
              <img className={styles['main-img']} src="/143-77236.jpeg" />
            </div>
            <div className={styles['content-colum-description']}>
              <div
                className={`${styles['inner-content-container']} ${styles['font-green']}`}
              >
                <MainTextBox
                  span={'A good day, on its way'}
                  titleSize={'font-mid'}
                  description={
                    'Get your favourites delivered with $3 off your order of $20 on Uber Eats thru 3/27.**'
                  }
                  descriptionSize={'font-sml'}
                />
                <Button className="mint" text="Order now" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles['content-inner']} ${styles['background-mint']} ${styles['.split']} ${styles['row-reverse']}`}
      >
        <div
          className={`${styles['inner-content-image']} ${styles['split-item']}`}
        >
          <img className={styles['main-img']} src="/143-77403.jpeg" />
        </div>
        <div
          className={`${styles['inner-content-description']} ${styles['split-item']}`}
        >
          <div
            className={`${styles['inner-content-container']} ${styles['font-green']}`}
          >
            <MainTextBox
              span={'Link. Order. Sip. Repeat'}
              titleSize={'font-mid'}
              description={
                'Sip your way toward your next adventure when you link your Starbucks® Rewards and Aeroplan® accounts.'
              }
              descriptionSize={'font-sml'}
            />
            <Button className="mint" text="Get started" />
          </div>
        </div>
      </div>
      <div className={styles['content-inner']}>
        <div className={styles.single}>
          <span>
            *At participating stores. Some restrictions apply. See&nbsp;
            <a className={styles.link} href="http://starbucks.ca/rewards">
              http://starbucks.ca/rewards
            </a>
            &nbsp;for details.
          </span>
        </div>
        <div className={styles.double}>
          <p className={styles.text}>
            **For a limited time, enjoy $3 off on your Starbucks orders of $20
            or more on Uber Eats. Excludes Uber One members. Restrictions and
            other taxes/fees apply. See Uber Eats app for details and location
            availability. Fees subject to change. Menu limited. Restricted
            delivery area. Available at participating locations only. Prices for
            Starbucks® items purchased through Uber eats may be higher than as
            marked or posted in stores. May not be combined with other offers,
            discounts, or promotions.
          </p>
        </div>
      </div>
    </div>
  );
};
