import React, { useMemo, useState } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';

import { ConfigProvider, DemosConfig } from './configContext';
import { DemoComponent } from './DemoComponent';
import { isDemo, isDemosGroup } from './DemoGroupItems';
import { DemosList } from './DemosList';
import { Sidebar } from './Sidebar';
import { Demo, DemosGroup } from './types';

type AppProps<D> = DemosConfig<D> & {
  demos: DemosGroup<D>;
};

export function App<D>({ demos, ...config }: AppProps<D>) {
  return (
    <BrowserRouter>
      <ConfigProvider value={config as DemosConfig<unknown>}>
        <Demos demos={demos as DemosGroup<unknown>} />
      </ConfigProvider>
    </BrowserRouter>
  );
}

type DemosProps = {
  demos: DemosGroup;
};

const Demos: React.FC<DemosProps> = ({ demos }) => {
  const [search, setSearch] = useState('');
  const filteredDemos = useMemo(() => filterDemos(demos, new RegExp(search, 'i')), [demos, search]);

  const location = useLocation();
  const currentPath = location.pathname.split('/').slice(1);

  const targetDemo = currentPath.reduce((group, key) => {
    if (!group) {
      return;
    }

    if (isDemosGroup(group)) {
      return group[key];
    } else {
      return group;
    }
  }, demos as DemosGroup | Demo | undefined);

  if (targetDemo && isDemo(targetDemo)) {
    return <DemoComponent demo={targetDemo} />;
  }

  return (
    <div className="demos__wrapper">
      <Sidebar group={filteredDemos} setSearch={setSearch} />
      <DemosList group={filteredDemos} />
    </div>
  );
};

const filterDemos = (demos: DemosGroup, regexp: RegExp): DemosGroup => {
  const matchItem = (name: string, demo: Demo) => {
    return Boolean(regexp.exec(name) || regexp.exec(demo.description ?? ''));
  };

  const matchGroup = (name: string) => {
    return Boolean(regexp.exec(name));
  };

  return Object.entries(demos).reduce((obj, [name, item]) => {
    if (isDemo(item)) {
      if (matchItem(name, item)) {
        return { ...obj, [name]: item };
      } else {
        return obj;
      }
    }

    if (isDemosGroup(item)) {
      if (matchGroup(name)) {
        return { ...obj, [name]: item };
      } else {
        const filteredGroup = filterDemos(item, regexp);

        if (Object.keys(filteredGroup).length > 0) {
          return { ...obj, [name]: filteredGroup };
        } else {
          return obj;
        }
      }
    }

    return obj;
  }, {} as DemosGroup);
};
