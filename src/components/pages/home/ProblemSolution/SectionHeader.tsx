import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      {badge && (
        <span className="inline-block bg-accent text-text-opposite text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
