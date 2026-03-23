import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <div className={`
      bg-card rounded-16 border border-black/5 overflow-hidden card-shadow
      ${hoverEffect ? 'transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
