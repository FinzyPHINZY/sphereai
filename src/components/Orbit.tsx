import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Orbit = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        'size-[200px] border border-gray-200/30 rounded-full',
        className
      )}
    ></div>
  );
};

export default Orbit;
