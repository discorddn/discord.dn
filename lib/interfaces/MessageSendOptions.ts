import GuildUser from "../../src/structures/GuildUser.ts"
import Role from "../../src/structures/Role.ts"
import Embed from "../../src/structures/Embed.ts"
import Attachment from "../../src/structures/Attachment.ts"
import Message from "../../src/structures/Message.ts"

export default interface MessageOptions {
    reply?: Message;
    pinned: boolean;
    embeds: Array<Embed>;
    channelId: string;
    attachments: Array<Attachment>;
}
