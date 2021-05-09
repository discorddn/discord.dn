import { Client } from "../structures/Client.ts";
import { Role } from "../structures/Role.ts";
import { RoleTag } from "../structures/RoleTag.ts";
import { Guild } from "../structures/Guild.ts";

/**
 * Resolver for Role.
 *
 * @param {any} data
 * @param {Guild} guild
 * @param {Client} client
 */
export function RoleResolver(data: any, guild: Guild, client: Client) {
  return new Role(
    {
      id: data.id,
      name: data.name,
      color: data.color,
      hoist: data.hoist,
      managed: data.managed,
      mentionable: data.mentionable,
      permissions: data.permissions,
      position: data.position,
      tags: new RoleTag({
        botId: data.tag!.bot_id,
        integrationId: data.tag!.integration_id,
        premiumSubscriber: data.tag!.premium_subscriber,
      }),
      // @ts-ignore
    },
    guild,
    client
  );
}
