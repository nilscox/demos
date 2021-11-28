import React, { useState } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';

import { ConfigProvider, DemosConfig } from './configContext';
import { DemosGroup } from './DemoGroup';
import { DemoRenderer } from './DemoRenderer';
import { DemosList } from './DemosList';
import { Sidebar } from './Sidebar';

type AppProps = DemosConfig<unknown> & {
  demos: DemosGroup<any>[];
};

export const App: React.FC<AppProps> = ({ demos, ...config }) => (
  <BrowserRouter basename={config.basename}>
    <ConfigProvider value={config}>
      <Demos groups={demos} />
    </ConfigProvider>
  </BrowserRouter>
);

type DemosProps = {
  groups: DemosGroup<unknown>[];
};

const Demos: React.FC<DemosProps> = ({ groups }) => {
  const [search, setSearch] = useState('');
  const demoPath = new URLSearchParams(useLocation().search).get('demo-path');

  if (demoPath) {
    const path = demoPath.replace(/^\//, '').split('/');
    const [demo] = groups.map((group) => group.findDemo(path)).filter(Boolean);

    if (!demo) {
      throw new Error(`demo not found, path=${demoPath}`);
    }

    return <DemoRenderer demo={demo} />;
  }

  return (
    <div className="demos__wrapper">
      <Sidebar groups={groups} setSearch={setSearch} />
      <DemosList groups={groups} />
    </div>
  );
};
