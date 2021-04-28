import GuildUser from "../../src/structures/GuildUser.ts"
import User from "../../src/structures/User.ts"
import Role from "../../src/structures/Role.ts"
import Embed from "../../src/structures/Embed.ts"
import Attachment from "../../src/structures/Attachment.ts"
import Message from "../../src/structures/Message.ts"

export default interface MessageOptions {
    type: number
    tts: boolean
    timestamp: string
    referencedMessage?: string
    pinned: boolean
    nonce: string
    mentions?: Array<GuildUser>
    mentionRoles?: Array<Role>
    mentionEveryone: boolean
    id: string
    flags: number
    embeds?: Array<Embed>
    editedTimestamp?: string
    content: string
    channelId: string
    author: GuildUser | User
    attachments?: Array<Attachment>
    guildId?: string
}