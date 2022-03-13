import React from 'react';
import styles from './Page.module.css';
import { MainTextBox } from '../MainTextBox';

export const Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles['content-inner']}>
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} />
          </div>
          <div className={styles['inner-content-description']}>
            <div className={styles['inner-content-container']}>
              <MainTextBox
                span={'Free faves are at your fingertips*'}
                description={''}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['content-inner']}>
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-description']}>
            <div className={styles['inner-content-container']}>
              <MainTextBox
                span={'Iced shaken awakening'}
                description={
                  'Introducing our new Iced Toasted Vanilla Oat Shaken Espresso with rich, creamy layers and nondairy goodness.'
                }
              />
            </div>
          </div>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} />
          </div>
        </div>
      </div>
      <div className={styles['content-inner']}>
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} />
          </div>
          <div className={styles['inner-content-description']}>
            <div className={styles['inner-content-container']}>
              <MainTextBox
                span={'Cheerfully chill'}
                description={
                  'Enjoy Strawberry Coconut Drink and Dragon Drink’s vibrant, fruity flavours with coconut beverage.'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['content-inner']}>
        <div className={styles['content-flex']}>
          <div className={styles['content-colum']}>
            <div className={styles['inner-content-image']}>
              <img className={styles['main-img']} />
            </div>
            <div className={styles['inner-content-description']}>
              <div className={styles['inner-content-container']}>
                <MainTextBox
                  span={'Your favorites. Your way.'}
                  description={
                    'Download the app to customize your drink, order ahead and earn Rewards.*'
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles['content-colum']}>
            <div className={styles['inner-content-image']}>
              <img className={styles['main-img']} />
            </div>
            <div className={styles['inner-content-description']}>
              <div className={styles['inner-content-container']}>
                <MainTextBox
                  span={'A good day, on its way'}
                  description={
                    'Get your favourites delivered with $3 off your order of $20 on Uber Eats thru 3/27.**'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['content-inner']}>
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-description']}>
            <div className={styles['inner-content-container']}>
              <MainTextBox
                span={'Earn even more with Starbucks Rewards and TD'}
                description={
                  'Link your Starbucks Rewards account with select TD Cards*** to start earning more points and Stars when you order on the Starbucks app!'
                }
              />
            </div>
          </div>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} />
          </div>
        </div>
      </div>
      <div className={styles['content-inner']}>
        <div className={styles['content-flex']}>
          <div className={styles['inner-content-image']}>
            <img className={styles['main-img']} />
          </div>
          <div className={styles['inner-content-description']}>
            <div className={styles['inner-content-container']}>
              <MainTextBox
                span={'Uplifting women and girls'}
                description={
                  'Since 2018, The Starbucks Foundation has supported 250,000 women and girls through investments in coffee and tea growing regions. But our work isn’t stopping there.'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
