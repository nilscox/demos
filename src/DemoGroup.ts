import { Demo } from './Demo';

export class DemosGroup {
  constructor(public readonly label: string, public readonly children: Array<Demo | DemosGroup>) {}

  static isDemoGroup(thing: unknown): thing is DemosGroup {
    return thing instanceof DemosGroup;
  }
}
