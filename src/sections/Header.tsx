import logoImage from '@/assets/images/sphereal-logo.svg?url';
import Button, { ButtonProps } from '@/components/Button';
import Logo from '@/components/Logo';
import Orbit from '@/components/Orbit';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const navItems = [
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
];

export const loginItems = [
  {
    buttonVariant: 'tertiary',
    name: 'Login',
    href: '#login',
  },
  {
    buttonVariant: 'primary',
    name: 'Sign Up',
    href: '#sign-up',
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps['variant'];
}[];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200/20">
        <div className="container">
          <div className="h-18 lg:h-20 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              {/* <div
                className="size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                style={{
                  maskImage: `url(${logoImage.src})`,
                  maskSize: 'contain',
                }}
              ></div> */}
              <Logo />
              <div className="font-extrabold text-2xl">sphere.ai</div>
            </div>
            <div className="">
              <div className="h-full hidden lg:block ">
                <nav className="h-full">
                  {navItems.map(({ name, href }) => (
                    <a
                      href={href}
                      key={href}
                      className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 " //  after:content-[''] after:hidden last:after:block
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(href);

                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ name, buttonVariant, href }) => (
                <a href={href} className="" key={name}>
                  <Button variant={buttonVariant}>{name}</Button>
                </a>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="size-10 rounded-lg relative border-2  border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <div
                    className={twMerge(
                      'w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300',
                      isOpen && 'translate-y-0 rotate-45'
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300',
                      isOpen && '-translate-y-0 -rotate-45'
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed top-18 left-0 right-0 bottom-0 bg-gray-950 z-30 overflow-hidden">
          <div className="absolute-center">
            <Orbit />
          </div>
          <div className="absolute-center">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center">
            <Orbit className="size-[650px]" />
          </div>
          <div className="container h-full">
            <nav className="flex flex-col items-center justify-center gap-4 py-8  h-full">
              {navItems.map(({ href, name }) => (
                <a
                  href={href}
                  className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10"
                  key={name}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);

                    setIsOpen(false);

                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {name}
                </a>
              ))}
              {loginItems.map(({ href, name, buttonVariant }) => (
                <a href={href} key={name} className="w-full max-w-xs">
                  <Button block variant={buttonVariant}>
                    {name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
