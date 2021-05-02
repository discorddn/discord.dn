import ChannelOptions from "../../lib/interfaces/ChannelOptions.ts"
import Guild from "./Guild.ts"
import ChannelOverwrite from "./ChannelOverwrite.ts"
import Message from "./Message.ts"
import User from "./User.ts"
import ThreadMetadata from "./ThreadMetadata.ts"
import ThreadMember from "./ThreadMember.ts"
import { Client }  from "./Client.ts"

export default class Channel {
    client: Client
    id: string
    type: number
    guild: Guild | null
    position: number | null
    permissionOverwrites: Array<ChannelOverwrite> | null
    name: string | null
    topic: string | null
    nsfw: boolean | null
    lastMessage: Message | null
    bitrate: number | null
    userLimit: number | null
    cooldown: number | null
    recipient: Array<User> | null
    icon: string | null
    owner: User | null
    parentId: string | null
    lastPinTimestamp: string | null
    rtcRegion: string | null
    videoQualityMode: number | null
    threadMessageCount: number | null
    threadMemberCount: number | null
    threadMetadata: ThreadMetadata | null
    threadMember: ThreadMember | null

    constructor(options: ChannelOptions, client: Client) {
        this.client = client
        this.id = options.id
        this.type = options.type
        this.guild = options.guild || null
        this.position = options.position || null
        this.permissionOverwrites = options.permissionOverwrites || null
        this.name = options.name || null
        this.topic = options.topic || null
        this.nsfw = options.nsfw || null
        this.lastMessage = options.lastMessage || null
        this.bitrate = options.bitrate || null
        this.userLimit = options.userLimit || null
        this.cooldown = options.cooldown || null
        this.recipient = options.recipient || null
        this.icon = options.icon || null
        this.owner = options.owner || null
        this.parentId = options.parentId || null
        this.lastPinTimestamp = options.lastPinTimestamp || null
        this.rtcRegion = options.rtcRegion || null
        this.videoQualityMode = options.videoQualityMode || null
        this.threadMessageCount = options.threadMessageCount || null
        this.threadMemberCount = options.threadMemberCount || null
        this.threadMetadata = options.threadMetadata || null
        this.threadMember = options.threadMember || null
    }

    public setChannelName(name: string) {
        if (![0, 2, 3, 4, 5, 6, 13].includes(this.type)) throw TypeError("Channel does not allow name change")
        if (!(name.length >= 2 && name.length <= 100)) throw Error("Channel name is not between 2-100 characters")
        this.client.api.patch(`/channels/${this.id}`, {
            name
        })
        this.name = name
        return this
    }

    public setNSFW(nsfw: boolean) {
        if (this.type != 0) throw new TypeError("Channel does not support NSFW")
        this.client.api.patch(`/channels/${this.id}`, {
            nsfw
        })
        this.nsfw = nsfw
        return this
    }

    public setCooldown(rate_limit_per_user: number) {
        if (this.type != 0) throw new TypeError("Channel does not support cooldowns")
        this.client.api.patch(`/channels/${this.id}`, {
            rate_limit_per_user
        })
        this.cooldown = rate_limit_per_user
        return this
    }

    public delete() {
        this.client.api.delete(`/channels/${this.id}`)
    }

}