'use client';

import {
  FC,
  ComponentType
} from 'react';
import {
  Settings,
  Cuboid,
  Rss,
  Filter as Funnel,
  Send,
  Play,
  Globe,
  Database,
  Rocket,
  Package,
  Image,
  History,
  Sparkles,
  Zap,
  Star,
  Heart,
  ArrowRight,
  Target,
  Building2,
  Wrench,
  BookOpen,
  Briefcase,
  TrendingUp,
  User,
  Microscope,
  Monitor,
  Trophy,
  MailCheck,
  FileDown,
  Users,
  Code,
  Sun,
  Moon,
  Lightbulb
} from "lucide-react";

const iconMap: Record<string, ComponentType < any >> = {
  Settings,
  Cuboid,
  Rss,
  Funnel,
  Send,
  Play,
  Globe,
  Database,
  Rocket,
  Package,
  Image,
  History,
  Sparkles,
  Zap,
  Star,
  Heart,
  ArrowRight,
  Target,
  Building2,
  Wrench,
  BookOpen,
  Briefcase,
  TrendingUp,
  User,
  Microscope,
  Monitor,
  Trophy,
  MailCheck,
  FileDown,
  Users,
  Code,
  Sun,
  Moon,
  Lightbulb
};

interface IconProps {
  name: string;
  [key: string]: any;
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null; // Or return a default icon
  }

  return <IconComponent { ...props } />;
};

export default Icon;
