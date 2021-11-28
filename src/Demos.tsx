import React, { useState } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';

import { ConfigProvider, DemosConfig } from './configContext';
import { DemosGroup } from './DemoGroup';
import { DemosList } from './DemosList';
import { Sidebar } from './Sidebar';

type AppProps<D> = DemosConfig<D> & {
  demos: DemosGroup[];
};

export function App<D>({ demos, ...config }: AppProps<D>) {
  return (
    <BrowserRouter basename={config.basename}>
      <ConfigProvider value={config as DemosConfig<unknown>}>
        <Demos groups={demos} />
      </ConfigProvider>
    </BrowserRouter>
  );
}

type DemosProps = {
  groups: DemosGroup[];
};

const Demos: React.FC<DemosProps> = ({ groups }) => {
  const [search, setSearch] = useState('');
  const demoPath = new URLSearchParams(useLocation().search).get('demo-path');

  if (demoPath) {
    return <>demo {demoPath}</>;
  }

  return (
    <div className="demos__wrapper">
      <Sidebar groups={groups} setSearch={setSearch} />
      <DemosList groups={groups} />
    </div>
  );
};
