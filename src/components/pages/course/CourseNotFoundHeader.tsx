import { FC } from 'react';
import { SearchX } from 'lucide-react';

const CourseNotFoundHeader: FC = () => {
  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full text-center mx-auto px-8 relative z-10 mb-8 sm:mb-6 md:mb-8 lg:mb-10">
      <div className='mb-4 inline-block'>
        <div className='flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-accent-special'>
          <SearchX className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-text-opposite' />
        </div>
      </div>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary'>Курс не найден</h1>
      <p className='mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed'>
        К сожалению, мы не смогли найти курс, который вы ищете. Возможно, он был перемещен или удален. Список всех имеющихся курсов вы можете увидеть на главной странице.
      </p>
    </div>
  );
};

export default CourseNotFoundHeader;
