'use client';

import Companies from '@/sections/Companies';
import Features from '@/sections/Features';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
    </div>
  );
}
