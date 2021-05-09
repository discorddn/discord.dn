import { SecretsOptions } from "../../lib/interfaces/SecretsOptions.ts";

export class Secrets {
  join: string;
  spectate: string;
  match: string;

  constructor(options: SecretsOptions) {
    this.join = options.join || "";
    this.spectate = options.spectate || "";
    this.match = options.match || "";
  }
}
