import { FC } from 'react';

interface CustomInputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Added onBlur prop
  error?: string | null;
  helperText?: string;
  required?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required,
}) => (
  <div className="mb-4 md:mb-5 lg:mb-6">
    <label htmlFor={id} className="block text-text-secondary text-sm font-medium mb:font-semibold lg:font-bold mb-0.5 sm:mb-1">
      {label} {!required && "(не обязательно)"}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className={`appearance-none border ${error ? 'border-accent-special' : 'border-brand-blue-light/30'} rounded w-full py-2 px-3 text-text-secondary text-sm md:text-base leading-tight focus:outline-none`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {helperText && <p className="text-xs text-text-tertiary mt-0.5 md:mt-1">{helperText}</p>}
    {error && <p className="text-accent-special text-xs md:text-sm sm:mt-0.5 md:mt-1">{error}</p>}
  </div>
);

export default CustomInput;
