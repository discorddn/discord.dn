import { GuildUser } from "../structures/GuildUser.ts";
import { Guild } from "../structures/Guild.ts";
import { RoleResolver } from "./RoleResolver.ts";
import { Client } from "../structures/Client.ts";

export function GuildUserResolver(data: any, guild: Guild, client: Client) {
    return new GuildUser({
        id: data.user!.id, 
        username: data.user!.username,
        tag: data.user!.discriminator,
        avatar: data.user!.avatar,
        bot: data.user!.bot,
        system: data.user!.system,
        mfaEnabled: data.user!.mfa_enabled,
        locale: data.user!.locale,
        email: data.user!.email,
        verified: data.user!.verified,
        flags: data.user!.flags,
        premiumType: data.user!.premium_type,
        publicFlags: data.user!.public_flags,
        nickname: data.nick,
        roles: data.roles.map((id: string) => guild.getRole(r => r.id === id)),
        joinedAt: data.joined_at,
        boostingSince: data.premium_since,
        deaf: data.deaf,
        mute: data.mute,
        pending: data.mute,
        permissions: data.permissions,
        guild: guild
    }, client)
}