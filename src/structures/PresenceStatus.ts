import { PresenceStatusOptions } from "../../lib/interfaces/PresenceStatusOptions.ts";

export class PresenceStatus {
  desktop: string;
  mobile: string;
  web: string;

  constructor(options: PresenceStatusOptions) {
    this.desktop = options.desktop || "";
    this.mobile = options.mobile || "";
    this.web = options.web || "";
  }
}
