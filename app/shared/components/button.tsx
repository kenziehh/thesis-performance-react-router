import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: keyof typeof variantStyles;
}

export const variantStyles = {
  'primary-green': 'rounded-2xl bg-primary-green text-white hover:bg-primary-green/80',
};

export const sizeStyles = {
  large: 'px-8 py-4 text-body-lg',
  medium: 'px-8 py-3.5 text-body-md',
  small: 'px-8 py-3 text-body-sm',
};

export default function Button({
  className = '',
  disabled,
  children,
  size = 'small',
  variant = 'primary-green',
  ...props
}: ButtonProps) {
  const baseStyles = 'text-center font-medium rounded-2xl cursor-pointer transition-all';
  return (
    <button
      {...props}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}