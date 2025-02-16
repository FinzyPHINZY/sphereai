import React from 'react';
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  {
    name: 'Login',
    href: '#',
  },
];

export const socialLinks = [
  {
    name: 'Youtube',
    icon: faYoutube,
    href: '#',
  },
  {
    name: 'X',
    icon: faXTwitter,
    href: '#',
  },
  {
    name: 'Discord',
    icon: faDiscord,
    href: '#',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="font-extrabold text-2xl">Sphere.ai</div>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navItems.map(({ href, name }) => (
              <a
                href={href}
                className="uppercase text-xs tracking-widest font-bold text-gray-400"
                key={href}
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
        <div className="mt-16 flex flex-col md:flex-row-reverse items-center md:justify-between gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ name, href, icon }) => (
              <a href="" className="" key={name}>
                <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy;{' '}
            <a
              href="https://finzyphinzy.vercel.app"
              className="hover:underline"
              target="_blank"
            >
              Boluwatife Adeyemi
            </a>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
