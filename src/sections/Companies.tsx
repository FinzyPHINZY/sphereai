import AcmeCorpLogo from '../assets/images/acme-corp-logo.svg';
import EchoValleyLogo from '../assets/images/echo-valley-logo.svg';
import QuantumLogo from '../assets/images/quantum-logo.svg';
import PulseLogo from '../assets/images/pulse-logo.svg';
import OutsideLogo from '../assets/images/outside-logo.svg';
import CelestialLogo from '../assets/images/celestial-logo.svg';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { motion } from 'framer-motion';

export const companies = [
  {
    name: 'Acme Corp',
    logo: AcmeCorpLogo,
  },
  {
    name: 'Echo Valley',
    logo: EchoValleyLogo,
  },
  {
    name: 'Quantum',
    logo: QuantumLogo,
  },
  {
    name: 'Pulse',
    logo: PulseLogo,
  },
  {
    name: 'Outside',
    logo: OutsideLogo,
  },
  {
    name: 'Celestial',
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return (
    <section className="">
      <div className="container">
        <SectionBorder>
          <SectionContent className="!pt-0">
            <h2 className="text-sm text-center uppercase font-bold tracking-widest text-gray-500">
              Empowering creators at leading companies
            </h2>
            <div className="flex mt-20 overflow-x-clip -mx-4 lg:-mx-8">
              <motion.div
                className="flex flex-none gap-18 md:gap-36 px-9 md:px-18"
                initial={{ x: 0 }}
                animate={{ x: '-50%' }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 10,
                }}
              >
                {[...companies, ...companies].map(({ name, logo: Logo }, i) => (
                  <div className="" key={name + i}>
                    <Logo className="h-8" />
                  </div>
                ))}
              </motion.div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;
