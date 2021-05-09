import { Channel } from "../../src/structures/Channel.ts";

/**
 * Interface for WelcomeScreenChannelOptions.
 */
export interface WelcomeScreenChannelOptions {
  channel: Channel;
  description: string;
  emojiId: string | null;
  emojiName: string;
}
