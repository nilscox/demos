import React, { createElement, FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { DemoComponent } from './DemoComponent';
import { DemoGroupItems, DemoItemProps, DemosGroupProps } from './DemoGroupItems';
import { DemosGroup } from './types';

type DemosListProps = {
  group: DemosGroup;
};

export const DemosList: React.FC<DemosListProps> = ({ group }) => (
  <div className="demos__content">
    <main>
      <DemoGroupItems group={group} path={[]} Demo={DemosListItem} Group={DemosListGroup} />
    </main>
  </div>
);

const DemosListGroup: React.FC<DemosGroupProps> = ({ group, path }) => (
  <GroupRoute path={'/' + path.join('/')}>
    <div className="demos__demo-group">
      <DemoGroupName className="demos__demo-group__name" depth={path.length}>
        {path[path.length - 1]}
      </DemoGroupName>
      <DemoGroupItems group={group} path={path} Demo={DemosListItem} Group={DemosListGroup} />
    </div>
  </GroupRoute>
);

const DemosListItem: React.FC<DemoItemProps> = ({ demo, path }) => (
  <div className="demos__demo-item">
    {demo.description && <div className="demos__demo-item__description">{demo.description}</div>}
    <div className="demos__demo-item__container">
      <Link to={'/' + path.join('/')} className="demos__demo-item__view">
        View demo
      </Link>
      <DemoComponent demo={demo} />
    </div>
  </div>
);

type GroupRouteProps = {
  path: string;
};

const GroupRoute: React.FC<GroupRouteProps> = ({ path, children }) => {
  const location = useLocation();

  if (location.pathname.startsWith(path.slice(0, location.pathname.length))) {
    return <>{children}</>;
  }

  return null;
};

type DemoGroupNameProps = {
  className?: string;
  depth: number;
};

const DemoGroupName: FC<DemoGroupNameProps> = ({ className, depth, children }) => {
  return createElement(`h${Math.min(depth + 1, 6)}`, { className }, children);
};
