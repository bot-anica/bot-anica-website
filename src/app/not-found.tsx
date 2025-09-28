import Button from '@/components/common/Button';
import { ButtonSize, ButtonVariant } from '@/types/common';

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen bg-bg-primary text-text-primary overflow-hidden">
      <div className="z-10 text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-blue-500">404</h1>
        <p className="mt-4 text-xl md:text-2xl font-light text-text-primary">
          Страница не найдена
        </p>
        <p className="mt-2 text-md md:text-lg text-text-secondary">
          Извините, мы не можем найти страницу, которую вы ищете.
        </p>
        <div className="mt-8">
          <Button href="/" variant={ButtonVariant.PRIMARY} size={ButtonSize.MD}>
            На главную
          </Button>
        </div>
      </div>
    </main>
  );
}
