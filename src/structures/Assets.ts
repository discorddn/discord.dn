import { AssetsOptions } from "../../lib/interfaces/AssetsOptions.ts";

/**
 * [TBD]
 */
export class Assets {
  largeImage: string;
  largeText: string;
  smallImage: string;
  smallText: string;

  constructor(options: AssetsOptions) {
    /**
     * The Large Image.
     * @type {string}
     */
    this.largeImage = options.largeImage || "";

    /**
     * The Text for the Large Image.
     * @type {string}
     */
    this.largeText = options.largeText || "";

    /**
     * The Small Image.
     * @type {string}
     */
    this.smallImage = options.smallImage || "";

    /**
     * The Text for the Small Image
     */
    this.smallText = options.smallText || "";
  }
}
