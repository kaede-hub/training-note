// pages/index.tsx
import React from 'react';
import FatRateGraph from '../components/FatRateGraph';
import Header from '@/components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <FatRateGraph />
    </div>
  );
};

export default HomePage;
