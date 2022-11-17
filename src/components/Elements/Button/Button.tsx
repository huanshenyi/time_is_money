import clsx from 'clsx';
import * as React from 'react';

const variants = {
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
};

const sizes = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', variant = 'info', size = 'md', isLoading = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx('btn', variants[variant], sizes[size], className, isLoading && 'loading')}
        {...props}
      >
        <span className="mx-2">{props.children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
