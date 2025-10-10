'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Button from '@/components/common/Button';
import Icon from '@/components/ui/Icon';
import { ButtonSize, ButtonVariant } from '@/types/common';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button onClick={toggleTheme} variant={ButtonVariant.SECONDARY} size={ButtonSize.ICON} aria-label="Поменять тему">
      <Icon name="Sun" className={`absolute h-[1.2rem] w-[1.2rem] ${theme == 'dark' ? 'scale-100' : 'scale-0'} transition-all`} />
      <Icon name="Moon" className={`absolute h-[1.2rem] w-[1.2rem] ${theme == 'dark' ? 'scale-0' : 'scale-100'} transition-all`} />
      <span className="sr-only">Поменять тему</span>
    </Button>
  );
}