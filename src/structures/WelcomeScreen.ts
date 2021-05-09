import { WelcomeScreenOptions } from "../../lib/interfaces/WelcomeScreenOptions.ts";
import { WelcomeScreenChannel } from "./WelcomeScreenChannel.ts";

export class WelcomeScreen {
  description: string;
  welcomeChannels: Array<WelcomeScreenChannel>;

  constructor(options: WelcomeScreenOptions) {
    this.description = options.description;
    this.welcomeChannels = options.welcomeChannels;
  }
}
