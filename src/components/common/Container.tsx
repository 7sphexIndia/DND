import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'standard' | 'wide';
}

const Container: React.FC<ContainerProps> = ({ children, className = '', size = 'standard' }) => {
  const paddingClass = size === 'wide' ? '' : '';
  return (
    <div className={`container-custom ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
