import { useState } from 'react';

interface UseTranslateReturn {
  translate: boolean;
  handleTranslate: () => void;
}

const useTranslate = (): UseTranslateReturn => {
  const raw = localStorage.getItem('defaultValueTranslate');
  const defaultValue = raw !== 'false';
  const [translate, setTranslate] = useState<boolean>(defaultValue);

  const handleTranslate = () => {
    setTranslate((prev) => {
      localStorage.setItem('defaultValueTranslate', String(!prev));
      return !prev;
    });
  };

  return { translate, handleTranslate };
};

export default useTranslate;
