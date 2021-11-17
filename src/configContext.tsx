import React, { createContext, useContext } from 'react';

export type DemosConfig<D> = {
  title?: React.ReactNode;
  basename?: string;
  getDependencies?: () => D;
  Wrapper?: React.ComponentType<D>;
};

const configContext = createContext<DemosConfig<unknown>>(null as any);
export const ConfigProvider = configContext.Provider;
export const useConfig = () => useContext(configContext);
