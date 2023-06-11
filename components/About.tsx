'use client';

import { NextPage } from 'next';
interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section className='about__section'>
      <div className='site__container text-center'>
        <h3 className='about__title'>Tirimiri is for everyone</h3>
        <p className='about__desc'>
          Tirimiri has thousands of learners on every category you can learn
          from
        </p>
        {/* image section  */}
        <div className='about__phone'>
          <img className='matched' src='/matched.png' alt='matched' />

          <img className='iphone14' src='/iphone-14-pro.svg' alt='iphone' />
          <img className='chat' src='/chat.png' alt='chat' />
        </div>

        <div className='d-flex justify-content-center gap-3 flex-wrap'>
          <button className='download__app-btn d-flex align-items-center gap-2 bg-white text-dark'>
            <img src='/google_play_black.svg' alt='google-play' />
            Google Play
          </button>
          <button className='download__app-btn d-flex align-items-center gap-2 bg-white text-dark'>
            <img src='/apple_black.svg' alt='apple' />
            App Store
          </button>
        </div>
        <p className='user__join'>
          <span className='user__count'>5690</span> users joined Tirimiri last
          week
        </p>
      </div>
    </section>
  );
};

export default About;
