import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState<string>('');

  const showToast = (msg: string, timeout = 2000) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), timeout);
  };

  const Toast = message ? (
    <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded shadow-lg">
      {message}
    </div>
  ) : null;

  return { showToast, Toast };
}