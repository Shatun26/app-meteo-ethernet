import type { NextPage } from 'next';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home: NextPage = () => {
  return (
    <div>
      <Link href={'/dashboard'}>dashboard</Link>
    </div>
  );
};

export default Home;
