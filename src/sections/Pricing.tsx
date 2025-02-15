import Button, { ButtonProps } from '@/components/Button';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const pricingTiers = [
  {
    title: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: 'Free',
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
    features: [
      'Access to AI chatbot for natural language conversations',
      'Basic task automation for simple workflows',
      'Limited message history storage',
    ],
    color: 'amber',
    className: 'lg:py-12 lg:my-6',
  },
  {
    title: 'Premium',
    description: 'Advanced AI capabilities for enhanced productivity',
    price: 990,
    buttonText: 'Upgrade to Premium',
    buttonVariant: 'secondary',
    features: [
      'All Basic features included',
      'Priority access to new AI features and updates',
      'Advanced automation tools for seamless task management',
      'Customizable chat templates for your specific workflows',
    ],
    color: 'violet',
    className: 'lg:py-18 lg:my-0',
  },
  {
    title: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: null,
    buttonText: 'Contact Us',
    buttonVariant: 'primary',
    features: [
      'All Premium features included',
      'Dedicated account manager and priority customer support',
      'Enhanced security and compliance features for large teams',
      "Custom AI models tailored to your organization's needs",
      'API access for seamless integration with enterprise systems',
    ],
    color: 'teal',
    className: 'lg:py-12 lg:my-6',
  },
] satisfies {
  title: string;
  description: string;
  price: string | number | null;
  buttonText: string;
  buttonVariant: ButtonProps['variant'];
  color: string;
  className: string;
  features: string[];
}[];

export const Pricing = () => {
  return (
    <section className="">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-200 leading-tight">
              Flexible plans for every need
            </h2>
            <div className="mt-12 flex flex-col lg:flex-row lg:items-start gap-8">
              {pricingTiers.map(
                ({
                  title,
                  description,
                  price,
                  buttonText,
                  buttonVariant,
                  features,
                  color,
                  className,
                }) => (
                  <div
                    className={twMerge(
                      'border border-[var(--color-border)] rounded-3xl px-6 py-12 max-w-sm mx-auto flex-1',
                      className
                    )}
                    key={title}
                  >
                    <h3
                      className={twMerge(
                        'font-semibold text-4xl',
                        color === 'violet' && 'text-violet-500',
                        color === 'amber' && 'text-amber-500',
                        color === 'teal' && 'text-teal-500'
                      )}
                    >
                      {title}
                    </h3>
                    <p className="mt-4 text-gray-400">{description}</p>
                    <div className="mt-8">
                      {typeof price === 'number' && (
                        <span className="text-2xl font-semibold text-gray-200 align-top">
                          ₦
                        </span>
                      )}
                      <span className="text-7xl font-semibold text-gray-200">
                        {price ? price : <>&nbsp;</>}
                      </span>
                    </div>
                    <Button className="mt-8" block variant={buttonVariant}>
                      {buttonText}
                    </Button>
                    <ul className="flex flex-col gap-4 mt-8">
                      {features.map((f) => (
                        <li
                          className="border-t border-[var(--color-border)] pt-4 flex gap-4 items-start"
                          key={f}
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="size-6 text-violet-400 flex-shrink-0"
                          />
                          <span className="font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
