import Button from '@/components/Button';
import robotImg from '@/assets/images/robot.jpg';
import Image from 'next/image';
import underlineImg from '@/assets/images/underline.svg?url';
import Loader from '@/assets/images/loader.svg';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-[var(--color-border)]">
          <div className="container py-24 md:py-36 lg:py-48 relative isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
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
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                />
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-x-[334px] -translate-y-[188px] -rotate-135"
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[508px] -translate-y-[372px] -rotate-135"
                />
                <Planet
                  size="md"
                  color="teal"
                  className="translate-x-[488px] -translate-y-[342px] -rotate-135"
                />
              </div>
              <div className="absolute top-[30%] left-0 z-10 -translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    Can you generate an incredible frontend application
                    tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute top-[50%] right-0 z-10 translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    <strong>brainwave: </strong> 1 just created one for you.
                    Check it out!
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </div>
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative">
                <Image src={robotImg} alt="robot image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
