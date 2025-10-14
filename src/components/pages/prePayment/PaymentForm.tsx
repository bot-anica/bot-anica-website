import { FC, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CustomSelect, CustomInput, Button } from '@/components/common';
import { Currency } from '@/types/sections';

interface PaymentFormProps {
  availableCurrencies: Currency[];
  onSubmit: (values: PaymentFormValues) => void;
  isLoading: boolean;
  apiError: string | null;
  onCurrencyCodeChange: (currencyCode: string) => void;
  disabled?: boolean;
}

export interface PaymentFormValues {
  selectedCurrencyCode: string;
  name: string;
  email: string;
}

const PaymentForm: FC<PaymentFormProps> = ({
  availableCurrencies,
  onSubmit,
  isLoading,
  apiError,
  onCurrencyCodeChange,
  disabled,
}) => {
  const validationSchema = Yup.object({
    selectedCurrencyCode: Yup.string().required('Пожалуйста, выберите валюту'),
    name: Yup.string().optional(),
    email: Yup.string().email('Некорректный формат email').required('Пожалуйста, введите ваш email'),
  });

  const formik = useFormik<PaymentFormValues>({
    initialValues: {
      selectedCurrencyCode: availableCurrencies[0]?.code || '',
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true, // Reinitialize form when availableCurrencies changes
  });

  // Update selectedCurrencyCode if availableCurrencies changes and current code is not valid
  // This handles the case where initialValues might not have the correct default if availableCurrencies loads later
  // or if the first currency changes.
  if (formik.values.selectedCurrencyCode === '' && availableCurrencies.length > 0) {
    formik.setFieldValue('selectedCurrencyCode', availableCurrencies[0].code);
  }

  // Call onCurrencyCodeChange when selectedCurrencyCode changes in Formik
  useEffect(() => {
    onCurrencyCodeChange(formik.values.selectedCurrencyCode);
  }, [formik.values.selectedCurrencyCode, onCurrencyCodeChange]);

  return (
    <form onSubmit={formik.handleSubmit} className="flex-1">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-4 md:mb-5 lg:mb-6">Данные для оплаты</h2>
      <CustomSelect
        id="selectedCurrencyCode"
        label="Валюта оплаты"
        options={availableCurrencies.map(currency => ({ value: currency.code, label: `${currency.name} (${currency.code})` }))}
        selectedValue={formik.values.selectedCurrencyCode}
        onValueChange={(value: string) => {
          formik.setFieldValue('selectedCurrencyCode', value);
          // No need to call onCurrencyCodeChange here directly, as useEffect will handle it
        }}
        error={formik.touched.selectedCurrencyCode && formik.errors.selectedCurrencyCode ? formik.errors.selectedCurrencyCode : null}
      />
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
        <div className="bg-accent-special/25 border border-red-400accent-special test-sm md:text-base text-accent-special-dark px-1.5 py-2 md:px-3 md:py-2 lg:px-4 lg:py-3 rounded relative mb-4" role="alert">
          <strong className="font-medium md:font-semibold lg:font-bold">Ошибка!</strong>
          <span className="inline ml-2">{apiError}</span>
        </div>
      )}
      <Button
        type="submit"
        disabled={disabled || isLoading || (!formik.isValid && formik.submitCount > 0)} // Disable only if loading or form is invalid after first submission attempt
        className="w-full mb-2 md:mb-3 lg:mb-4"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Создание инвойса...
          </>
        ) : (
          "Перейти к оплате"
        )}
      </Button>
      <p className="max-w-sm text-xs text-text-tertiary text-center mb-4 md:mb-6 lg:mb-8 mx-auto">Нажимая кнопку, вы соглашаетесь с условиями предоставления услуг</p>
    </form>
  );
};

export default PaymentForm;
