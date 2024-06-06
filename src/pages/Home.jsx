import React, { useEffect } from 'react';

import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='relative font-Montserrat text-whitish bg-header h-screen bg-cover after:bg-black after:h-screen after:w-screen after:absolute after:top-0 after:left-0 after:opacity-50 selection:bg-accent'>
      <div className='w-full h-[1px] bg-accent absolute top-24 '></div>
      <div className='w-[1px] h-screen bg-accent absolute left-12 '></div>
      <div className='w-[1px] h-screen bg-accent absolute right-12 '></div>

      <main className='relative z-10 container mx-auto h-full flex flex-col'>
        <Navbar />

        <section className='flex-1 flex'>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Home;
