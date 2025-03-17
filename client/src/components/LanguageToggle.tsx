
import { useState } from 'react';
import { Button } from './ui/button';

export const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <Button
      variant="outline"
      onClick={() => setIsEnglish(!isEnglish)}
      className="ml-4"
    >
      {isEnglish ? 'EN' : 'FIL'}
    </Button>
  );
};
