import React from 'react';

interface ColumnHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-text-tertiary text-sm">{subtitle}</p>
    </div>
  );
};

export default ColumnHeader;
