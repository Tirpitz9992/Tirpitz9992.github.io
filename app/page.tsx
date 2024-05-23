import { FC } from 'react';
import Navbar from '../components/Navbar';

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/bg.jpg')" }}>
      <div className='py-1'>
      <Navbar />
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-white text-6xl font-bold">Welcome</h1>
      </div>
    </div>
  );
};

export default HomePage;