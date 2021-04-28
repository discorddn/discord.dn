import { Client } from "./Client.ts";
import GuildUser from "../../src/structures/GuildUser.ts"
import User from "../../src/structures/User.ts"
import Role from "../../src/structures/Role.ts"
import Embed from "../../src/structures/Embed.ts"
import Attachment from "../../src/structures/Attachment.ts"
import MessageOptions from "../../lib/interfaces/MessageOptions.ts";
import MessageSendOptions from "../../lib/interfaces/MessageSendOptions.ts";

export default class Message {
    private client!: Client;
    readonly type: number
    readonly tts: boolean
    readonly timestamp: string
    readonly repliedToID?: string 
    readonly isPinned: boolean
    readonly nonce: string
    readonly mentions?: Array<GuildUser>
    readonly mentionRoles?: Array<Role>
    readonly mentionEveryone: boolean
    readonly id: string
    readonly flags: number
    readonly embeds?: Array<Embed>
    readonly editedTimestamp?: string
    readonly content: string
    readonly channelId: string
    readonly author: GuildUser | User
    readonly attachments?: Array<Attachment>
    readonly guildId?: string

	constructor(options: MessageOptions, client : Client) {
		this.client = client
		this.type = options.type
		this.tts = options.tts
		this.timestamp = options.timestamp
		this.repliedToID = options.referencedMessage || ""
		this.isPinned = options.pinned
		this.nonce = options.nonce
		this.mentions = options.mentions || []
		this.mentionRoles = options.mentionRoles || []
		this.mentionEveryone = options.mentionEveryone
		this.id = options.id
		this.flags = options.flags
		this.embeds = options.embeds || []
		this.editedTimestamp = options.editedTimestamp || ""
		this.content = options.content
		this.channelId = options.channelId
		this.author = options.author
		this.attachments = options.attachments || []
		this.guildId = options.guildId || ""
	}

    public get createdAt(): number {
        const binary = parseInt(this.id).toString(2)
        return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000
    }

    public get createdTimestamp(): Date {
        return new Date(this.createdAt)
    }

	public get repliedTo() {
		this.client.api.get(`/channels/${this.channelId}/messages/${this.repliedToID}`)
			.then(res => {
				console.log(res)
			})
		return 
	}

	public reply(content: string) {
		return new Promise(async (res, rej) => {
			this.client.api.post(`/channels/${this.channelId}/messages`, {
				content: content,
				message_reference: {
					message_id: this.id,
					channel_id: this.channelId,
					guild_id: this.guildId,
					fail_if_not_exists: false
				}
			}).then(res).catch(rej)
		})
	}
}
