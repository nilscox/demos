import React, { createContext, useContext } from 'react';

export type Configure<P> = (props: P) => P | Promise<P>;

export type DemosConfig<P> = {
  title?: React.ReactNode;
  basename?: string;
  configure?: Configure<P>;
  Wrapper?: React.ComponentType<P>;
};

const configContext = createContext<DemosConfig<unknown>>({});
export const ConfigProvider = configContext.Provider;

export function useConfig<P>() {
  return useContext(configContext) as DemosConfig<P>;
}
