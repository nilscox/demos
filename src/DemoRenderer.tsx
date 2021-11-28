import React, { FC, useEffect, useMemo, useState } from 'react';

import { useConfig } from './configContext';
import { Demo } from './types';

type DemoRendererProps = {
  demo: Demo;
};

export const DemoRenderer: React.FC<DemoRendererProps> = ({ demo }) => {
  const { getDependencies, Wrapper = NoopComponent } = useConfig();

  const { prepare, render: Demo } = demo;
  const [ready, setReady] = useState(false);

  const deps = useMemo(() => getDependencies?.() ?? {}, [getDependencies]);

  useEffect(() => {
    (async () => {
      if (deps) {
        await prepare?.(deps);
      }

      setReady(true);
    })();
  }, [deps, prepare]);

  return (
    <div className="demos__demo-component">
      <Wrapper {...deps}>{ready && <Demo />}</Wrapper>
    </div>
  );
};

const NoopComponent: FC = ({ children }) => <>{children}</>;
