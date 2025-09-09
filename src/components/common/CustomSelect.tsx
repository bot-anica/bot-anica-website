"use client";

import { FC, useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  label?: string;
  id?: string;
  error?: string | null; // Added error prop
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  selectedValue,
  onValueChange,
  label,
  id,
  error, // Destructure error prop
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement[]>([]);

  const selectedOption = options.find(option => option.value === selectedValue);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
    setFocusedIndex(-1); // Reset focused index when toggling
  }, []);

  const handleOptionClick = useCallback((value: string) => {
    onValueChange(value);
    setIsOpen(false);
  }, [onValueChange]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      selectRef.current?.focus(); // Return focus to the select button
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex(prev => (prev < options.length - 1 ? prev + 1 : prev));
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (isOpen) {
        setFocusedIndex(prev => (prev > 0 ? prev - 1 : 0));
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (isOpen) {
        if (focusedIndex !== -1) {
          handleOptionClick(options[focusedIndex].value);
        } else {
          // If dropdown is open but no option is focused, select the currently selected value
          handleOptionClick(selectedValue);
        }
      } else {
        handleToggle();
      }
    }
  }, [isOpen, options, focusedIndex, handleOptionClick, handleToggle]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isOpen && focusedIndex !== -1 && optionsRef.current[focusedIndex]) {
      optionsRef.current[focusedIndex].focus();
    }
  }, [isOpen, focusedIndex]);

  return (
    <div className="relative mb-4 md:mb-5 lg:mb-6" ref={selectRef}> {/* Added mb-6 for spacing */}
      {label && (
        <label id={id ? `${id}-label` : undefined} htmlFor={id} className="block text-gray-700 text-xs md:text-sm font-medium mb:font-semibold lg:font-bold md:mb-1 lg:mb-2">
          {label}
        </label>
      )}
      <div
        id={id}
        className={`appearance-none border ${error ? 'border-red-500' : 'border-primary-blue/15'} rounded w-full py-1.5 px-2 md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none cursor-pointer flex justify-between items-center`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown as any} // Cast to any to satisfy TS, as KeyboardEvent is not directly assignable
        tabIndex={0} // Make div focusable
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={id ? `${id}-label` : undefined} // Assuming label has an ID or is associated
        aria-activedescendant={focusedIndex !== -1 ? `${id}-option-${focusedIndex}` : undefined}
      >
        <span className="text-sm md:text-base">{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {error && <p className="text-red-500 text-xs md:text-sm sm:mt-0.5 md:mt-1">{error}</p>} {/* Error display */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-10 mt-1 w-full bg-white border border-primary-blue/15 rounded shadow-lg max-h-60 overflow-y-auto" // Added max-h and overflow
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={option.value === selectedValue}
              className={`py-1.5 px-2 md:py-2 md:px-3 cursor-pointer hover:bg-gray-100 ${focusedIndex === index ? 'bg-gray-100' : ''}`}
              onClick={() => handleOptionClick(option.value)}
              onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
              tabIndex={-1} // Make options focusable programmatically
              ref={el => { if (el) optionsRef.current[index] = el; }}
            >
              <span className="text-sm md:text-base">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;