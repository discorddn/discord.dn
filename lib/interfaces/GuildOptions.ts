import GuildUser from "../../src/structures/GuildUser.ts"
import Channel from "../../src/structures/Channel.ts"
import Role from "../../src/structures/Role.ts"
import Emoji from "../../src/structures/Emoji.ts"
import VoiceState from "../../src/structures/VoiceState.ts"

export default interface GuildOptions {
    id: string
    name : string
    icon: string
    iconHash?: string
    splash: string
    discoverySplash?: string
    owner: GuildUser
    permissions?: string
    region: string
    afkChannel: Channel
    afkTimeout: number
    widgetEnabled?: boolean
    widgetChannel?: Channel
    verificationLevel: number
    defaultMessageNotifications: number
    explicitContentFilter: number
    roles: Array<Role>
    emojis: Array<Emoji>
    features: Array<string>
    mfaLevel: number
    systemChannel: Channel
    systemChannelFlags: number
    ruleChannel : Channel
    joinedAt: string
    large?: boolean
    unavailable?: boolean
    memberCount?: number
    voiceStates: Array<VoiceState>
    members?: Array<GuildUser>
    channels?: Array<Channel>
    threads?: Array<Channel>
    /*
    need to finish
    */
}