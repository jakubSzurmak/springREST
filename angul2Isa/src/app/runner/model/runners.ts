import { Runner } from "./runner";
/**
 * GET runners response. Contains list of available runners. Can be used to list particular shoe's runners as
 * well as all runners in the db.
 */
export interface Runners {
  /**
   * List of runners.
   */
  runners:Runner[];
}
