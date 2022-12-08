import { useState } from 'react';

export const useStateFul = () => {
  const [state, setState] = useState(false);
  return [state, setState];
};
