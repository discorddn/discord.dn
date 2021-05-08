import { User } from "../structures/User.ts";
import { Client } from "../structures/Client.ts";

export function UserResolver(data: any, client: Client) {
    return new User({
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
        publicFlags: data.public_flags,
        premiumType: data.premium_type
    }, client)
}

