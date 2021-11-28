import React, { createElement, FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Demo } from './Demo';
import { DemosGroup } from './DemoGroup';

type DemosListProps = {
  groups: DemosGroup[];
};

export const DemosList: React.FC<DemosListProps> = ({ groups }) => (
  <div className="demos__content">
    <main>
      <DemosGroups items={groups} path={[]} />
    </main>
  </div>
);

type DemosGroupsProps = {
  path: string[];
  items: Array<DemosGroup | Demo>;
};

const DemosGroups: React.FC<DemosGroupsProps> = ({ path, items }) => (
  <>
    {items.map((item) => (
      <GroupRoute key={item.label} path={['', ...path, item.label].join('/')}>
        {DemosGroup.isDemoGroup(item) && <DemosGroupComponent path={[...path, item.label]} group={item} />}
        {Demo.isDemo(item) && <DemoComponent path={[...path, item.label]} demo={item} />}
      </GroupRoute>
    ))}
  </>
);

type DemosGroupComponentProps = {
  path: string[];
  group: DemosGroup;
};

const DemosGroupComponent: React.FC<DemosGroupComponentProps> = ({ path, group }) => (
  <div className="demos__demo-group">
    <DemoGroupName className="demos__demo-group__name" depth={path.length}>
      {group.label}
    </DemoGroupName>
    <DemosGroups path={path} items={group.children} />
  </div>
);

type DemoComponentProps = {
  path: string[];
  demo: Demo;
};

const DemoComponent: React.FC<DemoComponentProps> = ({ path, demo }) => (
  <div className="demos__demo-item">
    <span className="demos__demo-item__name">{demo.label}</span>

    {demo.description && <div className="demos__demo-item__description">{demo.description}</div>}

    <div className="demos__demo-item__container">
      <Link to={{ pathname: '/', search: 'demo-path=/' + path.join('/') }} className="demos__demo-item__view">
        View demo
      </Link>
      <iframe src={`/?demo-path=${'/' + path.join('/')}`} frameBorder={0} className="demos__demo-iframe" />
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
