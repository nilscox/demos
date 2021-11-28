import { Configure } from './configContext';
import { Demo } from './Demo';

export class DemosGroup<P> {
  static isDemoGroup(thing: unknown): thing is DemosGroup<unknown> {
    return thing instanceof DemosGroup;
  }

  parent?: DemosGroup<P>;

  constructor(
    public readonly label: string,
    public readonly children: Array<Demo<P> | DemosGroup<P>>,
    private _configure?: Configure<P>,
  ) {
    for (const child of this.children) {
      child.parent = this;
    }
  }

  async configure(props: P): Promise<P> {
    if (this.parent) {
      props = await this.parent.configure({ ...props });
    }

    if (this._configure) {
      props = await this._configure({ ...props });
    }

    return props;
  }

  findDemo(path: string[]): Demo<unknown> | undefined {
    if (path[0] !== this.label) {
      return;
    }

    for (const child of this.children) {
      if (Demo.isDemo(child) && child.label === path[1]) {
        return child;
      }

      if (DemosGroup.isDemoGroup(child)) {
        const found = child.findDemo(path.slice(1));

        if (found) {
          return found;
        }
      }
    }
  }
}
