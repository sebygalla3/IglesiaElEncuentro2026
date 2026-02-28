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
      className={`${bgClass}  rounded-lg p-7 shadow-md  ${className}`}
      {...rest}
    >
      {title && <h2 className="text-6xl font-bold mb-2 truncate">{title}</h2>}
      {subtitle && <h3 className="text-3xl font-bold text-gray-600 mb-4">{subtitle}</h3>}
      {description && <p className="text-gray-700 text-base text-justify">{description}</p>}
    </div>
  );
};

export default Card;

