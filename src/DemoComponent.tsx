import React, { FC, useEffect, useMemo, useState } from 'react';

import { useConfig } from './configContext';
import { Demo } from './types';

type DemoComponentProps = {
  demo: Demo;
};

export const DemoComponent: React.FC<DemoComponentProps> = ({ demo }) => {
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
