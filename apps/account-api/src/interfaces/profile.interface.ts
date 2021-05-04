import { GraphNodeInterface } from '@app/common';

/**
 * Account Interface
 */
export interface GraphProfileInterface extends GraphNodeInterface {
  forename?: string;
  surname?: string;
  name?: string;
}
