import { createContext, useContext, Dispatch } from 'react';

export type CountContextType = {
  count: number;
  dispatchCount: Dispatch<Action>;
};

export const CountContext = createContext<CountContextType | undefined>(undefined);

export const useCount = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};