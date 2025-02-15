import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const SectionBorder = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge('border-x border-[var(--color-border)]', className)}
    >
      {children}
    </div>
  );
};

export default SectionBorder;
