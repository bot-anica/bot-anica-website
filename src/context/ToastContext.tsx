"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

type ShowToastFunction = (message: string, duration?: number) => void;

const ToastContext = createContext<ShowToastFunction | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return { showToast: context };
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const showToast: ShowToastFunction = useCallback((msg, duration = 3000) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage(msg);
    setIsVisible(true);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setMessage(null), 300);
    }, duration);
  }, []);
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {typeof window === "object" && message && createPortal(
        <div
          className={`fixed bottom-5 right-5 z-50 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {message}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
