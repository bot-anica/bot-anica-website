import { FC } from 'react';
import Image from 'next/image';
import { Clock, Zap } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration?: string;
  difficulty?: string;
  variant: 'large' | 'small';
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, tags, duration, difficulty, variant }) => {
  if (variant === 'large') {
    return (
      <div className="bg-bg-secondary rounded-2xl overflow-hidden group h-164 relative">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-bg-secondary text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-sm text-text-primary">{tag}</span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary/90 mb-4">{description}</p>
          <div className="flex items-center gap-6 text-text-secondary/90 text-sm border-t border-white/10 pt-4 mt-4">
            {duration && <span className="flex items-center gap-2"><Clock size={16} /> {duration}</span>}
            {difficulty && <span className="flex items-center gap-2"><Zap size={16} /> {difficulty}</span>}
          </div>
        </div>
      </div>
    );
  }

  // Small variant
  return (
    <div className="bg-bg-secondary rounded-2xl overflow-hidden group h-78">
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-bg-primary text-text-secondary">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-1">{title}</h3>
        <p className="text-text-secondary/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;