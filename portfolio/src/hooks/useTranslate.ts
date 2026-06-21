// src/hooks/useTranslate.ts
import { useEffect, useState } from 'react';

interface UseTranslateReturn {
  translate: boolean;
  handleTranslate: () => void;
}

const useTranslate = (): UseTranslateReturn => {
  // Démarre toujours en FR (safe pour SSR) puis lit localStorage après hydration
  const [translate, setTranslate] = useState<boolean>(true);

  useEffect(() => {
    const raw = localStorage.getItem('defaultValueTranslate');
    if (raw === 'false') setTranslate(false);
  }, []);

  const handleTranslate = () => {
    setTranslate((prev) => {
      localStorage.setItem('defaultValueTranslate', String(!prev));
      return !prev;
    });
  };

  return { translate, handleTranslate };
};

export default useTranslate;
