import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils';


const buttonVariants = cva(
    'inline-flex items-center justify-center roundend none font-semibold uppercase tracking-wider text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ',
    {
       variants: {
         variant:{
            primary: 'bg-[#B88E2F] text-white hover:bg-opacity-90 focus:ring-[#B88E2F]'
                ,
            secondary: 'bg-transparent border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white focus:ring-[#B88E2F]'
         },
         size:{
            default:'py-3 px-10',
            lg:'py-4 px-12'
         },
         defaultVariants:{
            variant:'primary',
            size:'default',
         }
       }
    }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

 
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
