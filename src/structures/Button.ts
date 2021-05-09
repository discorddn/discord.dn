import { ButtonOptions } from "../../lib/interfaces/ButtonOptions.ts";

/**
 * [TBD]
 */
export class Button {
  label: string;
  url: string;

  constructor(options: ButtonOptions) {
    /**
     * The Label of the Button.
     * @type {string}
     */
    this.label = options.label;

    /**
     * The URL of the Button.
     * @type {string}
     */
    this.url = options.url;
  }
}
