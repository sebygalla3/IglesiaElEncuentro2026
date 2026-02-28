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
      className={`${bgClass} rounded-lg p-10 shadow-md  ${className}`}
      {...rest}
    >
      {title && <h2 className="text-4xl font-bold mb-6 truncate">{title}</h2>}
      {subtitle && <h3 className="text-3xl font-bold text-gray-600 mb-4">{subtitle}</h3>}
      {description && <p className="text-gray-700 text-xl">{description}</p>}
    </div>
  );
};

export default Card;

