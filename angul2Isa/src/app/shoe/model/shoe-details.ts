/**
 * Represents full shoe object.
 */
export interface ShoeDetails {

  /**
   * Shoe's uuid.
   */
  id: string;

  /**
   * Brand of the shoe.
   */
  brandName: string;

  /**
   * Model of the shoe.
   */
  model: string;

  /**
   * Shoe's color.
   */
  color: string;

  /**
   * Shoe's size
   */
  size: number;

  /**
   * Shoe's owner's uuid.
   */
  ownerId: string;
}
