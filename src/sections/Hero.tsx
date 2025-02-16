import Button from '@/components/Button';
import robotImg from '@/assets/images/robot.jpg';
import Image from 'next/image';
import underlineImg from '@/assets/images/underline.svg?url';
import Loader from '@/assets/images/loader.svg';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);

  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);

  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, []);

  return { xProgress, yProgress };
};

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end start', 'start end'],
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);

  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);

  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>{' '}
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>{' '}
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{' '}
              <span className="relative">
                <span>Sphere AI</span>
                <span
                  className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImg.src})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Harness the power of AI with Sphere AI. Elevate your productivity
              and streamline your workflow with our cutting-edge AI platform
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start chatting
              </Button>
            </div>
            <div className="relative isolatem max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="translate-x-[334px] -translate-y-[188px] -rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateSmallX,
                    y: translateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-x-[508px] -translate-y-[372px] -rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="translate-x-[488px] -translate-y-[342px] -rotate-135"
                  />
                </motion.div>
              </div>
              <div className="absolute top-[30%] left-0 z-10 -translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72"
                  style={{ y: transformedY }}
                >
                  <div>
                    Can you generate an incredible frontend application
                    tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute top-[50%] right-0 z-10 translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72"
                  style={{ y: transformedY }}
                >
                  <div>
                    <strong>brainwave: </strong> I just created one for you.
                    Check it out!
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </motion.div>
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative">
                <Image src={robotImg} alt="robot image" />
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
        {/* <div className="border-x border-[var(--color-border)]"> */}

        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
