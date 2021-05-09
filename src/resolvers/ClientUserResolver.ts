import { ClientUser } from "../structures/ClientUser.ts";
import { Client } from "../structures/Client.ts";

/**
 * Resolver for ClientUser.
 *
 * @param {any} data
 * @param {Client} client
 */
export function ClientUserResolver(data: any, client: Client) {
  return new ClientUser(
    {
      id: data.id,
      username: data.username,
      tag: data.discriminator,
      avatar: data.avatar,
      bot: data.bot,
      system: data.system,
      mfaEnabled: data.mfa_enabled,
      locale: data.locale,
      email: data.email,
      verified: data.verified,
      flags: data.flags,
    },
    client
  );
}
