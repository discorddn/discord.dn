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

    public setName(name: string) {
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

    public setTopic(topic: string) {
        if (this.type != 0) throw new TypeError("Channel does not support topics")
        this.client.api.patch(`/channels/${this.id}`, {
            topic
        })
        this.topic = topic
        return this
    }

    public setPosition(position: number) {
        this.client.api.patch(`/channels/${this.id}`, {
            position
        })
        this.position = position
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

    public setBitrate(bitrate: number) {
        if (this.type != 2) throw TypeError("Channel is not a voice channel")
        if (bitrate < 8000 || bitrate > 128000) throw TypeError(`Bitrate Value "${bitrate}" is below 8000 or above 128000`)
        this.client.api.patch(`/channels/${this.id}`, {
            bitrate
        })
        this.bitrate = bitrate
        return this
    }

    public setUserLimit(user_limit: number) {
        if (this.type != 2) throw TypeError("Channel is not a voice channel")
        if (user_limit > 99) throw TypeError("User limit is larger than 99")
        this.client.api.patch(`/channels/${this.id}`, {
            user_limit
        })
        this.userLimit = user_limit
        return this
    }

    public send(content: string) {
        this.client.api.post(`/channels/${this.id}/messages`, {
            content
        })
        // i need to change this to return a message object but i need resolvers for that and im too lazy to make rn so yeahhhhhh
        return this
    }

    public triggerTyping() {
        this.client.api.post(`/channels/${this.id}/typing`, {}) 
    }

    public delete() {
        this.client.api.delete(`/channels/${this.id}`)
    }

}