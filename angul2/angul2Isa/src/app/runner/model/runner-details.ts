import { Shoes } from "../../shoe/model/shoes"

/**
* Represents single runner in list.
*/
export interface RunnerDetails {

  /**
   * Unique id identifying runner.
   */
  id: string;

  /**
   * Name of the runner.
   */
  name: string;

  /**
   * Runner's background story.
   */
  surname: string;

  /**
   * Runner's age.
   */
  birthDate: string;

  /**
   * Runner's shoe
   */
  shoes: Shoes;

}

