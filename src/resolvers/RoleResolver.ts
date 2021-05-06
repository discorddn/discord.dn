import { Client } from "../structures/Client.ts"
import Role from "../structures/Role.ts"
import RoleTag from "../structures/RoleTag.ts"
import Guild from "../structures/Guild.ts"

export default function RoleResolver(data: any, guild: Guild, client: Client) {
    return new Role({
        id: data.id,
        name: data.name,
        color: data.color,
        hoist: data.hoist,
        managed: data.managed,
        mentionable: data.mentionable,
        permissions: data.permissions,
        position: data.position,
        tags: new RoleTag({botId: data.tag!.bot_id, integrationId: data.tag!.integration_id, premiumSubscriber: data.tag!.premium_subscriber})
    // @ts-expect-error
    }, guild, client)
}