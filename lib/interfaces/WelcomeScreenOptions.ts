import { WelcomeScreenChannel } from "../../src/structures/WelcomeScreenChannel.ts"

export interface WelcomeScreenOptions {
    description: string
    welcomeChannels: Array<WelcomeScreenChannel>
}