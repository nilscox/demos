export type DemoSpec = {
  render: () => JSX.Element;
  description?: string;
  keywords?: string[];
};

export class Demo {
  constructor(public readonly label: string, public readonly spec: DemoSpec & { variants?: DemoSpec[] }) {}

  static isDemo(thing: unknown): thing is Demo {
    return thing instanceof Demo;
  }

  get description() {
    return this.spec.description;
  }
}
