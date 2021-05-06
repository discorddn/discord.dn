import Channel from "../../src/structures/Channel.ts"

export default interface WelcomeScreenChannelOptions {
    channel: Channel
    description: string
    emojiId: string | null
    emojiName: string
}