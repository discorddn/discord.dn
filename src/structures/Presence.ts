import PresenceOptions from "../../lib/interfaces/PresenceOptions.ts"
import GuildUser from "./GuildUser.ts"
import Guild from "./Guild.ts"
import ClientStatus from "./ClientStatus.ts"
import Activity from "./Activity.ts"

export default class Presence {
    user: GuildUser
    guild: Guild
    status: string
    activities: Array<Activity>
    clientStatus: Array<ClientStatus>

    constructor(options: PresenceOptions) {
        this.user = options.user
        this.guild = options.guild
        this.status = options.status
        this.activities = options.activities
        this.clientStatus = options.clientStatus
    }
}