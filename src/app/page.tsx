'use client';

import CallToAction from '@/sections/CallToAction';
import Companies from '@/sections/Companies';
import Features from '@/sections/Features';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import Testimonials from '@/sections/Testimonials';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
