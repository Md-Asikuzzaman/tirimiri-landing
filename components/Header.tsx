import { NextPage } from 'next';
import Image from 'next/image';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header>
      <div className='header__container'>
        <nav className='d-flex align-items-center justify-content-between'>
          <Image src='/logo.svg' width={180} height={52} alt='tirimiri' />
          <button className='download__btn__outline'>Download app</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
