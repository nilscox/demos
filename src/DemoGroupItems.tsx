import React, { Fragment } from 'react';

import { Demo } from './Demo';
import { DemosGroup } from './DemoGroup';

export function isDemo(item: DemosGroup | Demo): item is Demo {
  return item instanceof Demo;
}

export function isDemosGroup(item: DemosGroup | Demo): item is DemosGroup {
  return item instanceof DemosGroup;
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
  groups: DemosGroup[];
  path: string[];
  Demo?: React.ComponentType<DemoItemProps>;
  Group?: React.ComponentType<DemosGroupProps>;
};

export const DemoGroupItems: React.FC<DemoGroupItemsProps> = ({ groups, path, Demo, Group }) => (
  <>
    {Object.entries(groups).map(([name, item]) => (
      <Fragment key={name}>
        {isDemo(item) && Demo && <Demo demo={item} path={[...path, name]} />}
        {isDemosGroup(item) && Group && <Group group={item} path={[...path, name]} />}
      </Fragment>
    ))}
  </>
);
