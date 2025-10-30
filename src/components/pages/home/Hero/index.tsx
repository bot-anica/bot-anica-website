import { Button } from '@/components/common';
import { ButtonSize, ButtonVariant } from '@/types/common';
import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="relative bg-background py-20 md:py-32 lg:py-40 max-h-screen">
      <div className="absolute right-0 bottom-0 left-0 h-50 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/0" />
      <div className="absolute right-0 bottom-0 left-0 h-50 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/0" />

      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
              От идеи до проекта в{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">
                портфолио
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-text-secondary max-w-xl mx-auto md:mx-0">
              Практические курсы для создания IT-портфолио. Учитесь в своем темпе с пожизненным доступом.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LG}>
                Выбрать курс
              </Button>
              <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LG}>
                Смотреть программу
              </Button>
            </div>
            <p className="mt-6 text-sm text-text-tertiary">
              Более 450 участников в нашем сообществе.
            </p>
          </div>

          {/* Right Side: Visual Element */}
          <div className="flex justify-center items-center">
            {/* Placeholder for the isometric laptop illustration */}
            <Image src="/images/home/hero/HeroImg.png" alt="" width={1200} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
