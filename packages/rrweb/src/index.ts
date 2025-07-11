import record from './record';
import {
  Replayer,
  type playerConfig,
  type PlayerMachineState,
  type SpeedMachineState,
} from './replay';
import canvasMutation from './replay/canvas';
import { _mirror } from './utils';
import * as utils from './utils';
import packageJson from '../package.json';

export {
  EventType,
  IncrementalSource,
  MouseInteractions,
  ReplayerEvents,
  type eventWithTime,
} from '@rrweb/types';

// exports style.css from replay
import './replay/styles/style.css';

export type { recordOptions, ReplayPlugin } from './types';

const { addCustomEvent } = record;
const { freezePage } = record;
const { takeFullSnapshot } = record;

export {
  record,
  addCustomEvent,
  freezePage,
  takeFullSnapshot,
  Replayer,
  type playerConfig,
  type PlayerMachineState,
  type SpeedMachineState,
  canvasMutation,
  _mirror as mirror,
  utils,
};
const VERSION = (packageJson as { version: string }).version;

if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  (window as any).checksumRRWeb = {
    version: VERSION,
  };
}
