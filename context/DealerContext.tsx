import React, { createContext, useState } from 'react';

type DealerContextType = {
  dealerName: string;
  setDealerName: React.Dispatch<React.SetStateAction<string>>;
}

export const DealerContext = createContext<DealerContextType>({ dealerName: '', setDealerName: () => {} });

export const DealerProvider = ({ children }) => {
  const [dealerName, setDealerName] = useState('');

  return (
    <DealerContext.Provider value={{ dealerName, setDealerName }}>
      {children}
    </DealerContext.Provider>
  );
};
