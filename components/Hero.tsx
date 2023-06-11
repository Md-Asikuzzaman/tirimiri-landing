import { NextPage } from 'next';
interface Props {}

const Hero: NextPage<Props> = ({}) => {
  return (
    <section className='hero__section'>
      <div className='site__container text-center'>
        <h1 className='hero__title'>
          Find your
          <span className='hero__title-blue ms-2'>learning partner</span> online
        </h1>
        <p className='hero__desc'>
          Tirimiri helps you find your ideal learning partner based on your
          learning needs
        </p>
        <div className='d-flex justify-content-center gap-3 flex-wrap'>
          <button className='download__app-btn d-flex align-items-center gap-2'>
            <img src='/google_play.svg' alt='google-play' /> Google Play
          </button>
          <button className='download__app-btn d-flex align-items-center gap-2'>
            <img src='/apple.svg' alt='apple' />
            App Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
