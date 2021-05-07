import GuildOptions from "../../lib/interfaces/GuildOptions.ts"
import GuildUser from "./GuildUser.ts"
import Channel from "./Channel.ts"
import Role from "./Role.ts"
import Emoji from "./Emoji.ts"
import VoiceState from "./VoiceState.ts"
import Presence from "./Presence.ts"
import WelcomeScreen from "./WelcomeScreen.ts"
import GuildUserResolver from "../resolvers/GuildUserResolver.ts"
import { Client } from "./Client.ts"

export default class Guild {
    client: Client
    id: string
    name : string
    icon: string
    iconHash?: string
    splash: string
    discoverySplash?: string
    owner: GuildUser
    permissions?: string
    region: string
    afkChannel?: Channel
    afkTimeout?: number
    widgetEnabled?: boolean
    widgetChannel?: Channel
    verificationLevel: number
    defaultMessageNotifications: number
    explicitContentFilter: number
    roles: Array<Role>
    emojis: Array<Emoji>
    features: Array<string>
    mfaLevel: number
    systemChannel?: Channel
    systemChannelFlags?: number
    ruleChannel?: Channel
    joinedAt: string
    large?: boolean
    unavailable?: boolean
    memberCount?: number
    voiceStates?: Array<VoiceState>
    members?: Array<GuildUser>
    channels?: Array<Channel>
    threads?: Array<Channel>
    presences?: Array<Presence>
    maxPresences?: number
    maxMembers?: number
    vanityUrlCode?: string
    description?: string
    banner?: string
    premiumTier: number
    totalNitroBoosts: number
    preferredLocale: string
    publicUpdatesChannel?: Channel
    maxVideoChannelUsers?: number
    approximateMemberCount?: number
    approximatePresenceCount?: number
    welcomeScreen?: WelcomeScreen
    nsfw: boolean

    constructor(options: GuildOptions, client: Client) {
        this.client = client
        this.id = options.id
        this.name = options.name
        this.icon = options.icon
        this.iconHash = options.iconHash 
        this.splash = options.splash
        this.discoverySplash = options.discoverySplash 
        this.owner = options.owner
        this.permissions = options.permissions 
        this.region = options.region
        this.afkChannel = options.afkChannel ?? new Channel({id: "", type: -1}, this.client)
        this.afkTimeout = options.afkTimeout 
        this.widgetEnabled = !!options.widgetEnabled
        this.widgetChannel = options.widgetChannel ?? new Channel({id: "", type: -1}, this.client)
        this.verificationLevel = options.verificationLevel
        this.defaultMessageNotifications = options.defaultMessageNotifications
        this.explicitContentFilter = options.explicitContentFilter
        this.roles = options.roles ?? []
        this.emojis = options.emojis ?? []
        this.features = options.features ?? []
        this.mfaLevel = options.mfaLevel
        this.systemChannel = options.systemChannel ?? new Channel({id: "", type: -1}, this.client)
        this.systemChannelFlags = options.systemChannelFlags 
        this.ruleChannel = options.ruleChannel ?? new Channel({id: "", type: -1}, this.client)
        this.joinedAt = options.joinedAt
        this.large = !!options.large
        this.unavailable = !!options.unavailable
        this.memberCount = options.memberCount 
        this.voiceStates = options.voiceStates ?? []
        this.members = options.members ?? []
        this.channels = options.channels ?? []
        this.threads = options.threads ?? []
        this.presences = options.presences ?? []
        this.maxPresences = options.maxPresences 
        this.maxMembers = options.maxMembers 
        this.vanityUrlCode = options.vanityUrlCode
        this.description = options.description
        this.banner = options.banner
        this.premiumTier = options.premiumTier 
        this.totalNitroBoosts = options.totalNitroBoosts 
        this.preferredLocale = options.preferredLocale
        this.publicUpdatesChannel = options.publicUpdatesChannel ?? new Channel({id: "", type: -1}, this.client)
        this.maxVideoChannelUsers = options.maxVideoChannelUsers 
        this.approximateMemberCount = options.approximateMemberCount 
        this.approximatePresenceCount = options.approximatePresenceCount 
        this.welcomeScreen = options.welcomeScreen ?? new WelcomeScreen({description: "", welcomeChannels: []})
        this.nsfw = !!options.nsfw
    }

    public get createdAt(): number {
        const binary = parseInt(this.id).toString(2)
        return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000
    }

    public get createdTimestamp(): Date {
        return new Date(this.createdAt)
    }

    public async fetchMember(id: string) {
        return GuildUserResolver(await this.client.api.get(`/guilds/${this.id}/members/${id}`), this, this.client)
    }

    public getRole(idFilter: (role: Role) => Role) {
        return this.roles.find(idFilter)
    }

    public getRoles(idFilter: (role: Role) => Role) {
        return this.roles.filter(idFilter)
    }

    public async setNick(user: GuildUser, nick: string) {
        return GuildUserResolver(await this.client.api.patch(`/guilds/${this.id}/members/${user.id}`, {
            nick
        }), this, this.client)
    }

}