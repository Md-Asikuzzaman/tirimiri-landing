import { NextPage } from 'next';

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className='footer__section'>
      <div className='site__container text-center'>
        <a href='#'>
          <img className='logo' src='/footer_logo.svg' alt='tirimiri' />
        </a>
        <ul className='footer__links list-unstyled d-flex justify-content-center'>
          <li>
            <a className='text-decoration-none text-white' href='#'>
              About us
            </a>
          </li>
          <li>
            <a className='text-decoration-none text-white' href='#'>
              Programs
            </a>
          </li>
          <li>
            <a className='text-decoration-none text-white' href='#'>
              Testimonials
            </a>
          </li>
          <li>
            <a className='text-decoration-none text-white' href='#'>
              Invite Friends
            </a>
          </li>
        </ul>
        <div>
          <ul className='list-unstyled d-flex justify-content-center align-items-center gap-4'>
            <li>
              <a href='#'>
                <img src='/social/facebook.svg' alt='fb' />
              </a>
            </li>

            <li>
              <a href='#'>
                <img src='/social/youtube.svg' alt='yt' />
              </a>
            </li>

            <li>
              <a href='#'>
                <img src='/social/instagram.svg' alt='ins' />
              </a>
            </li>

            <li>
              <a href='#'>
                <img src='/social/linkedin.svg' alt='ln' />
              </a>
            </li>

            <li>
              <a href='#'>
                <img src='/social/twitter.svg' alt='tw' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
