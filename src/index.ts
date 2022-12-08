import { useState, useEffect } from 'react';
export const useStateFul = () => {
  const [state, setState] = useState(false);
  return [state, setState];
};

export const useEffectFul = () => {
  return useEffect(() => {});
};
