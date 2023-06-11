import { NextPage } from 'next';

interface Props {}

const Work: NextPage<Props> = ({}) => {
  return (
    <section className='work__section'>
      <h2 className='work__title mb-0'>How it works</h2>
      <div className='site__container'>
        <div className='row gx-5'>
          <div className='col-lg-7 work__details d-flex align-items-center'>
            <div>
              <p className='work__choose py-2'>Choose your goal</p>
              <h4 className='work__goal'>
                You have <span className='goal'>thousands of goal</span> to
                select from
              </h4>
            </div>
          </div>
          <div className='col-lg-5 overflow-hidden'>
            <div className='phone__wrapper phone-one d-flex justify-content-center'>
              <img src='/phone-one.svg' alt='phone' />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='site__container'>
        <div className='row gx-5 work__two'>
          <div className='col-lg-5 overflow-hidden'>
            <div className='phone__wrapper phone-two d-flex justify-content-center'>
              <img src='/phone-two.svg' alt='phone' />
            </div>
          </div>
          <div className='col-lg-7 work__details d-flex align-items-center justify-content-end'>
            <div>
              <p className='work__choose py-2'>Find your match</p>
              <h4 className='work__goal'>
                Tirimiri algorithem helps you match your ideal partner
              </h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='site__container'>
        <div className='row gx-5'>
          <div className='col-lg-7 work__details d-flex align-items-center'>
            <div>
              <p className='work__choose py-2'>Start interacting</p>
              <h4 className='work__goal'>
                Tirimiri algorithem helps you match your ideal partner
              </h4>

              <button className='app__download d-flex align-items-center gap-2'>
                Download app
              </button>
            </div>
          </div>
          <div className='col-lg-5 overflow-hidden'>
            <div className='phone__wrapper phone-three d-flex justify-content-center'>
              <img src='/phone-three.svg' alt='phone' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
