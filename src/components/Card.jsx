import React from 'react';

const Card = ({
  title,
  subtitle,
  description,
  bgClass = 'bg-white',
  className = '',
  ...rest
}) => {
  return (
    <div
      className={`${bgClass} rounded-lg p-9 shadow-md ${className}`}
      {...rest}
    >
      {title && <h2 className="text-2xl font-bold mb-1">{title}</h2>}
      {subtitle && <h3 className="text-base font-bold text-gray-600 mb-2">{subtitle}</h3>}
      {description && <p className="text-gray-700 text-sm">{description}</p>}
    </div>
  );
};

export default Card;

