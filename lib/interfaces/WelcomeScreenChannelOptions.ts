import { Channel } from "../../src/structures/Channel.ts"

export interface WelcomeScreenChannelOptions {
    channel: Channel
    description: string
    emojiId: string | null
    emojiName: string
}