import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useConfig } from './configContext';
import { Demo } from './Demo';
import { DemosGroup } from './DemoGroup';

type SidebarProps = {
  groups: DemosGroup[];
  setSearch: (search: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ groups, setSearch }) => {
  const { title } = useConfig();

  return (
    <aside className="demos__sidebar">
      <h1 className="demos__sidebar__branding">
        <Link to="/">{title}</Link>
      </h1>

      <input
        className="demos__sidebar__search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <Tree path={[]} items={groups} />
    </aside>
  );
};

type TreeProps = {
  path: string[];
  items: Array<DemosGroup | Demo>;
};

const Tree: React.FC<TreeProps> = ({ items, path }) => (
  <>
    {items.map((item) => (
      <div key={item.label} className={`demos__tree__item depth-${path.length + 1}`}>
        <NavLink to={['', ...path, item.label].join('/')} className="demos__tree__item-label">
          {item.label}
        </NavLink>

        {DemosGroup.isDemoGroup(item) && <Tree path={[...path, item.label]} items={item.children} />}
      </div>
    ))}
  </>
);
