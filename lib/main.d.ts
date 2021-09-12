/// <reference types="react" />
import React$1 from 'react';

declare type DemosConfig<D> = {
    title?: React$1.ReactNode;
    getDependencies?: () => D;
    Wrapper?: React$1.ComponentType<D>;
};

declare type Demo<D = unknown> = {
    description?: string;
    prepare?: (dependencies: D) => void | Promise<void>;
    render: () => React.ReactElement;
};
declare type DemosGroup<D = unknown> = {
    [key: string]: DemosGroup<D> | Demo<D>;
};

declare type AppProps<D> = DemosConfig<D> & {
    demos: DemosGroup<D>;
};
declare function App<D>({ demos, ...config }: AppProps<D>): JSX.Element;

export { Demo, App as Demos, DemosGroup };
