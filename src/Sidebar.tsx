import React from 'react';

import { Link, matchPath, NavLink, useLocation } from 'react-router-dom';

import { useConfig } from './configContext';
import { DemoGroupItems, DemosGroupProps } from './DemoGroupItems';
import { DemosGroup } from './types';

type SidebarProps = {
  group: DemosGroup;
  setSearch: (search: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ group, setSearch }) => {
  const { title } = useConfig();

  return (
    <aside className="demos__sidebar">
      <h1 className="demos__sidebar__branding">
        <Link to="/">{title}</Link>
      </h1>
      <input className="demos__sidebar__search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <DemoGroupItems path={[]} group={group} Group={TreeGroup} />
    </aside>
  );
};

const TreeGroup: React.FC<DemosGroupProps> = ({ group, path }) => {
  const location = useLocation();

  const pathname = ['', ...path].join('/');
  const active = matchPath(location.pathname, { path: pathname, exact: true });

  return (
    <div className={`demos__tree__group depth-${path.length}`}>
      <NavLink to={active ? '/' : pathname} className="demos__tree__group-name">
        {path[path.length - 1]}
      </NavLink>
      <DemoGroupItems group={group} path={path} Group={TreeGroup} />
    </div>
  );
};
