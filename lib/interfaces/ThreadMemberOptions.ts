import { Channel } from "../../src/structures/Channel.ts"
import { GuildUser } from "../../src/structures/GuildUser.ts"

export interface ThreadMemberOptions {
    channel: Channel
    user: GuildUser
    joinTimestamp: string
    flags: number
}