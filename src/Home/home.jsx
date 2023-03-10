import React from 'react';
import Featured from '../components/featured/featured.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
