import type { NextPage } from 'next';
import Link from 'next/link';
<<<<<<< Updated upstream
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
=======
import  Skeleton  from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
>>>>>>> Stashed changes

const Home: NextPage = () => {
  return (
    <div>
      <Link href={'/dashboard'}>dashboard</Link>
    </div>
  );
};

export default Home;
