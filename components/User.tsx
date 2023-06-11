import { NextPage } from 'next';
interface Props {}

const User: NextPage<Props> = ({}) => {
  return (
    <section className='user__section'>
      <div className='user__container position-relative w-100'>
        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user1'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user1.svg' alt='user1' />
            <p className='position-absolute top-0 popup__text user-one-popup'>
              Studying MBBS
            </p>
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user2'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user2.svg' alt='user2' />
            <p className='position-absolute top-0 popup__text user-two-popup'>
              Studying MBBS
            </p>
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user3'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user3.svg' alt='user3' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user4'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user4.svg' alt='user4' />
            <p className='position-absolute top-0 popup__text user-four-popup'>
              I’m a MBA student
            </p>
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user5'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user5.svg' alt='user3' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user6'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user6.svg' alt='user6' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user7'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user7.svg' alt='user7' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user8'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user8.svg' alt='user8' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user9'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user9.svg' alt='user9' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user10'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img
              className='rounded-full'
              src='/users/user10.svg'
              alt='user10'
            />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user11'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user11.svg' alt='user11' />
          </div>
        </div>

        <div
          className='position-absolute top-0 bottom-0 start-0 end-0 m-auto user12'
          style={{ height: '144px', width: '144px' }}
        >
          <div className='position-relative'>
            <img src='/users/user12.svg' alt='user12' />
          </div>
        </div>

        <div className='position-relative mx-auto video-img'>
          <img
            className='video-img-desktop'
            src='/users/video-img.svg'
            alt='video'
          />

          <img
            className='video-img-mobile'
            src='/users/video-img-mobile.svg'
            alt='video'
          />
          <div className='user__play-btn position-absolute'>
            <img src='/users/play.svg' alt='play' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
