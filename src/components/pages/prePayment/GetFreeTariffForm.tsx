import { FC } from 'react';
import { Loader2 } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CustomInput, Button } from '@/components/common';

interface GetFreeTariffFormProps {
  onSubmit: (values: GetFreeTariffFormValues) => void;
  isLoading: boolean;
  apiError: string | null;
}

export interface GetFreeTariffFormValues {
  name: string;
  email: string;
}

const GetFreeTariffForm: FC<GetFreeTariffFormProps> = ({
  onSubmit,
  isLoading,
  apiError,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().optional(),
    email: Yup.string().email('Некорректный формат email').required('Пожалуйста, введите ваш email'),
  });

  const formik = useFormik<GetFreeTariffFormValues>({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true, // Reinitialize form when availableCurrencies changes
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4 md:mb-5 lg:mb-6">Данные для получения материалов тарифа</h2>
      <CustomInput
        id="name"
        name="name"
        label="Имя"
        type="text"
        placeholder="Введите ваше имя"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
      />
      <CustomInput
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="your.email@example.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        helperText="На этот email будут отправлены материалы курса"
        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
      />
      {apiError && (
        <div className="bg-accent-special/50 border border-accent-special test-sm md:text-base text-accent-special px-3 py-2 rounded relative mb-4" role="alert">
          <strong className="font-medium md:font-semibold lg:font-bold">Ошибка!</strong>
          <span className="inline ml-2">{apiError}</span>
        </div>
      )}
      <Button
        type="submit"
        disabled={isLoading || (!formik.isValid && formik.submitCount > 0)} // Disable only if loading or form is invalid after first submission attempt
        className="w-full mb-2 md:mb-3 lg:mb-4"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Подготовка материалов
          </>
        ) : (
          "Получить материалы"
        )}
      </Button>
      <p className="max-w-sm text-xs text-text-tertiary text-center mb-6 md:mb-7 lg:mb-8 mx-auto">Нажимая кнопку, вы соглашаетесь с условиями предоставления услуг</p>
    </form>
  );
};

export default GetFreeTariffForm;
