import React, { useState } from 'react';
import boniface from '@/assets/images/boniface.jpg';
import victor from '@/assets/images/victor.jpg';
import ReneWells from '@/assets/images/rene-wells.jpg';
import MollieHall from '@/assets/images/mollie-hall.jpg';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

export const testimonials = [
  {
    quote:
      "Sphere AI has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: 'Saraki Boniface',
    title: 'Operations Manager',
    image: boniface,
  },
  {
    quote:
      "Sphere AI integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: 'Victor Ekubo',
    title: 'Operations Manager',
    image: victor,
  },
  {
    quote:
      "Sphere AI's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: 'Rene Wells',
    title: 'Customer Success Manager',
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphere AI. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: 'Mollie Hall',
    title: 'Product Designer',
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(2);

  return (
    <section id="testimonials">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex flex-col md:flex-row  gap-12 md:mx-10 lg:mx-20"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2 bg-neutral-950"
                />

                <AnimatePresence mode="wait" initial={false}>
                  {testimonials
                    .filter((_, index) => testimonialIndex === index)
                    .map(({ name, quote, title, image }) => (
                      <motion.blockquote
                        key={name}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        layout
                        className="flex flex-col lg:flex-row gap-12"
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            src={image}
                            alt={name}
                            className="rounded-xl size-28 max-w-none"
                          />
                          <div className="font-bold mt-4">{name}</div>
                          <div className="text-xs text-gray-400 mt-2">
                            {title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ))}
                </AnimatePresence>

                <motion.div
                  layout="position"
                  className="flex gap-2 md:flex-col"
                >
                  {testimonials.map(({ name }, index) => (
                    <div
                      className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer"
                      key={name}
                      onClick={() => setTestimonialIndex(index)}
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          className="absolute border-gradient size-full rounded-full -z-10"
                          layoutId="testimonial-dot"
                        ></motion.div>
                      )}
                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
