import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const SectionContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        'container py-24 md:py-36 lg:py-48 relative ',
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContent;
