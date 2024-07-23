import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', variant = 'primary', size = 'medium' }) => {
  let variantClasses = '';
  let sizeClasses = '';

  switch (variant) {
    case 'outline':
      variantClasses = 'bg-transparent border border-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)]';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-200 text-black';
      break;
    case 'danger':
      variantClasses = 'bg-red-500 text-white';
      break;
    case 'primary':
    default:
      variantClasses = 'bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-zinc-950';
      break;
  }

  switch (size) {
    case 'small':
      sizeClasses = 'px-4 py-2 text-sm';
      break;
    case 'large':
      sizeClasses = 'px-16 py-6 text-xl';
      break;
    case 'medium':
    default:
      sizeClasses = 'px-10 py-4 text-lg';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`flex gap-4 self-start text-lg leading-5 text-center rounded-lg transition-transform transform hover:scale-105 active:scale-95 ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
