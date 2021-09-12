import React, { Fragment } from 'react';

import { Demo, DemosGroup } from './types';

export function isDemo(item: DemosGroup | Demo): item is Demo {
  return 'render' in item;
}

export function isDemosGroup(item: DemosGroup | Demo): item is DemosGroup {
  return !isDemo(item);
}

export type DemoItemProps = {
  demo: Demo;
  path: string[];
};

export type DemosGroupProps = {
  group: DemosGroup;
  path: string[];
};

type DemoGroupItemsProps = {
  group: DemosGroup;
  path: string[];
  Demo?: React.ComponentType<DemoItemProps>;
  Group?: React.ComponentType<DemosGroupProps>;
};

export const DemoGroupItems: React.FC<DemoGroupItemsProps> = ({ group, path, Demo, Group }) => (
  <>
    {Object.entries(group).map(([name, item]) => (
      <Fragment key={name}>
        {isDemo(item) && Demo && <Demo demo={item} path={[...path, name]} />}
        {isDemosGroup(item) && Group && <Group group={item} path={[...path, name]} />}
      </Fragment>
    ))}
  </>
);
