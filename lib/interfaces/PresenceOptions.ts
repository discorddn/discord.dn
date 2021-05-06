import GuildUser from "../../src/structures/GuildUser.ts"
import Guild from "../../src/structures/Guild.ts"
import PresenceStatus from "../../src/structures/PresenceStatus.ts"
import Activity from "../../src/structures/Activity.ts"

export default interface PresenceOptions {
    user: GuildUser
    guild: Guild
    status: string
    activities: Array<Activity>
    PresenceStatus: Array<PresenceStatus>
}
