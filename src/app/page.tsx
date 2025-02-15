'use client';

import Companies from '@/sections/Companies';
import Features from '@/sections/Features';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Features />
    </div>
  );
}
