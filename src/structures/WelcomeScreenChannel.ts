import WelcomeScreenChannelOptions from "../../lib/interfaces/WelcomeScreenChannelOptions.ts"
import Channel from "./Channel.ts"

export default class WelcomeScreenChannel {
    channel: Channel
    description: string
    emojiId: string
    emojiName: string

    constructor(options: WelcomeScreenChannelOptions) {
        this.channel = options.channel
        this.description = options.description
        this.emojiId = options.emojiId || ""
        this.emojiName = options.emojiName
    }
}