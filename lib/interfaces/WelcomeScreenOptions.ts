import WelcomeScreenChannel from "../../src/structures/WelcomeScreenChannel.ts"

export default interface WelcomeScreenOptions {
    description: string
    welcomeChannels: Array<WelcomeScreenChannel>
}