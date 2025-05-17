import React from 'react';

function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        px-4 py-2 rounded-lg
        text-sm sm:text-base
        font-semibold
        ${bgColor} ${textColor}
        hover:opacity-90
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
        transition duration-200 ease-in-out
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
