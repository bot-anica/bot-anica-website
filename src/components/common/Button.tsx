import { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { ButtonSize, ButtonVariant } from '../../types/common';
import Link from 'next/link';
// import { HashLink } from 'react-router-hash-link';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  withoutBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className,
  disabled = false,
  type = 'button',
  withoutBorder = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none box-border';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-pink to-brand-blue text-white hover:scale-105 focus:ring-brand-pink',
    secondary: `bg-bg-primary text-text-primary ${withoutBorder ? '' : 'border-2 border-brand-blue-light/30'} hover:bg-brand-blue-light/5 focus:ring-brand-blue-light box-border`,
    outline: `bg-transparent text-text-primary ${withoutBorder ? '' : 'border-2 border-brand-pink'} hover:bg-brand-pink hover:text-text-opposite focus:ring-brand-pink`,
    ghost: 'bg-transparent text-foreground hover:bg-brand-pink/10 focus:ring-accent'
  };
  
  const sizeClasses = {
    sm: 'px-4 h-10 text-sm',
    md: 'px-6 h-12 text-base',
    lg: 'px-5 h-11 md:px-6 md:h-13 lg:px-8 lg:h-15 text-base md:text-lg',
    icon: 'h-10 w-10'
  };
  
  const classes = cn(
    baseClasses,
    variantClasses[variant as ButtonVariant],
    sizeClasses[size as ButtonSize],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link href={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 