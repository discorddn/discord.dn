import { WelcomeScreenChannel } from "../../src/structures/WelcomeScreenChannel.ts";

/**
 * Interface for WelcomeScreenOptions.
 */
export interface WelcomeScreenOptions {
  description: string;
  welcomeChannels: Array<WelcomeScreenChannel>;
}
