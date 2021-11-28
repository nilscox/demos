import React, { FC, useEffect, useRef, useState } from 'react';

import { useConfig } from './configContext';
import { Demo } from './Demo';

type DemoRendererProps = {
  demo: Demo<unknown>;
};

export const DemoRenderer: React.FC<DemoRendererProps> = ({ demo }) => {
  const { configure = (props: unknown) => props, Wrapper = NoopComponent } = useConfig();

  const [ready, setReady] = useState(false);

  const props = useRef(configure(undefined));

  useEffect(() => {
    (async () => {
      props.current = await demo.configure?.(props.current);
      setReady(true);
    })();
  }, [props, demo, configure]);

  return (
    <div className="demos__demo-component">
      <Wrapper {...props.current}>{ready && demo.render(props.current)}</Wrapper>
    </div>
  );
};

const NoopComponent: FC = ({ children }) => <>{children}</>;
