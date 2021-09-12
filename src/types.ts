export type Demo<D = unknown> = {
  description?: string;
  prepare?: (dependencies: D) => void | Promise<void>;
  render: () => React.ReactElement;
};

export type DemosGroup<D = unknown> = {
  [key: string]: DemosGroup<D> | Demo<D>;
};
