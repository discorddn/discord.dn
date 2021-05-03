import User from "./User.ts"
import Role from "./Role.ts"
import { Client } from "./Client.ts"
import GuildUserOptions from "../../lib/interfaces/GuildUserOptions.ts"

export default class GuildUser extends User {
    nickname: string
    roles: Array<Role>
    joinedAt: string
    boostingSince: string
    deaf: boolean
    mute: boolean
    pending: boolean | undefined
    permissions: string | undefined

    constructor(options: GuildUserOptions, client: Client) {
        super(options, client)
        this.nickname = options.nickname
        this.roles = options.roles
        this.joinedAt = options.joinedAt
        this.boostingSince = options.boostingSince
        this.deaf = options.deaf
        this.mute = options.mute
        this.pending = options.pending
        this.permissions = options.permissions
    }
}