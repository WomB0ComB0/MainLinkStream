/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

const ErrorHandlerContext = createContext<Erroring | undefined>(undefined);
export function useErrorHandler() {
  const context = useContext(ErrorHandlerContext);
  if (!context) {
    throw new Error('useErrorHandler must be used within an ErrorHandlerProvider');
  }
  return context;
}
export function ErrorHandlerProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Error | null>(null);
  const handleError = (error: Error) => {
    setError(error);
  };
  const clearError = () => {
    setError(null);
  };
  const contextValue: Erroring = {
    error,
    handleError,
    clearError,
  };
  return <ErrorHandlerContext.Provider value={contextValue}>{children}</ErrorHandlerContext.Provider>;
}
