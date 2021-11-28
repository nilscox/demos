import { ReactElement } from 'react';

import { Configure } from './configContext';
import { DemosGroup } from './DemoGroup';

type DemoSpec<P> = {
  render: (props: P) => ReactElement;
  configure?: Configure<P>;
  description?: string;
  keywords?: string[];
};

export class Demo<P> {
  static isDemo(thing: unknown): thing is Demo<unknown> {
    return thing instanceof Demo;
  }

  parent?: DemosGroup<P>;

  constructor(public readonly label: string, private spec: DemoSpec<P>) {}

  get description() {
    return this.spec.description;
  }

  async configure(props: P): Promise<P> {
    if (this.parent) {
      props = await this.parent.configure({ ...props });
    }

    return this.spec.configure?.(props) ?? props;
  }

  render(props: P): ReactElement {
    return this.spec.render(props);
  }
}
