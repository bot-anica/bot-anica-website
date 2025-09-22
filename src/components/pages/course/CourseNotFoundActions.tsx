import { FC } from 'react';
import { Button } from '@/components/common';
import { ButtonVariant, ButtonSize } from '@/types/common';
import Link from 'next/link';

const CourseNotFoundActions: FC = () => {
  return (
    <div className="text-center">
      <Link href="/">
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.MD}>
          На главную
        </Button>
      </Link>
    </div>
  );
};

export default CourseNotFoundActions;
