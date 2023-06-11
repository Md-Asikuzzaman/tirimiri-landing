import About from '@/components/About';
import Hero from '@/components/Hero';
import User from '@/components/User';
import Work from '@/components/Work';
import { NextPage } from 'next';
interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Hero />
      <User />
      <Work />
      <About />
    </>
  );
};

export default Home;
