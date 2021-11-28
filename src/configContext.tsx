import React, { createContext, useContext } from 'react';

export type DemosConfig<D = unknown> = {
  title?: React.ReactNode;
  basename?: string;
  getDependencies?: () => D;
  Wrapper?: React.ComponentType<D>;
};

const configContext = createContext<DemosConfig>({});
export const ConfigProvider = configContext.Provider;

export function useConfig<D = unknown>() {
  return useContext(configContext) as DemosConfig<D>;
}
