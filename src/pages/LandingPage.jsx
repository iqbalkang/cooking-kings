import React from 'react';
import LogoWithPot from '../images/logowithpot.svg';
import SpacedUppercaseText from '../components/SpacedUppercaseText';

const LandingPage = () => {
  return (
    <header className='flex flex-col justify-center items-center max-w-[700px] text-center mx-auto space-y-2'>
      <img src={LogoWithPot} alt='logowithpot' className='w-16' />

      <SpacedUppercaseText text='ristorante' />

      <h1 className='text-7xl'>
        <span className='font-bold'>cooking</span>
        <span className='text-accent'>kings</span>
      </h1>

      <SpacedUppercaseText text='by chef' />

      <p className='font-Sacramento text-2xl pb-8'>Giovanni Bellucci</p>

      <p>
        Step into Giovanni Bellucci's Trattoria, where the vibrant essence of Italy comes to life on every plate.
        Nestled in the heart of the city, our restaurant offers an exquisite dining experience, blending traditional
        recipes with a modern twist. Chef Giovanni Bellucci, renowned for his culinary artistry, invites you to savor
        the rich, authentic flavors of Italy, crafted with the freshest ingredients and a passion for perfection.
      </p>
    </header>
  );
};

export default LandingPage;
