import { RoleTagOptions } from "../../lib/interfaces/RoleTagOptions.ts";

export class RoleTag {
  readonly botId?: string;
  readonly integrationId?: string;
  readonly premiumSubscriber?: null;

  constructor(options: RoleTagOptions) {
    this.botId = options.botId;
    this.integrationId = options.integrationId;
    this.premiumSubscriber = options.premiumSubscriber;
  }
}
