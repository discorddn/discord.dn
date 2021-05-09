import { GuildUser } from "../../src/structures/GuildUser.ts";
import { Channel } from "../../src/structures/Channel.ts";
import { Role } from "../../src/structures/Role.ts";
import { Emoji } from "../../src/structures/Emoji.ts";
import { VoiceState } from "../../src/structures/VoiceState.ts";
import { Presence } from "../../src/structures/Presence.ts";
import { WelcomeScreen } from "../../src/structures/WelcomeScreen.ts";

/**
 * Interface for GuildOptions.
 */
export interface GuildOptions {
  id: string;
  name: string;
  icon: string;
  iconHash?: string;
  splash: string;
  discoverySplash?: string;
  owner: GuildUser;
  permissions?: string;
  region: string;
  afkChannel?: Channel;
  afkTimeout?: number;
  widgetEnabled?: boolean;
  widgetChannel?: Channel;
  verificationLevel: number;
  defaultMessageNotifications: number;
  explicitContentFilter: number;
  roles: Array<Role>;
  emojis: Array<Emoji>;
  features: Array<string>;
  mfaLevel: number;
  systemChannel?: Channel;
  systemChannelFlags?: number;
  ruleChannel?: Channel;
  joinedAt: string;
  large?: boolean;
  unavailable?: boolean;
  memberCount?: number;
  voiceStates?: Array<VoiceState>;
  members?: Array<GuildUser>;
  channels?: Array<Channel>;
  threads?: Array<Channel>;
  presences?: Array<Presence>;
  maxPresences?: number;
  maxMembers?: number;
  vanityUrlCode?: string;
  description?: string;
  banner?: string;
  premiumTier: number;
  totalNitroBoosts: number;
  preferredLocale: string;
  publicUpdatesChannel?: Channel;
  maxVideoChannelUsers?: number;
  approximateMemberCount?: number;
  approximatePresenceCount?: number;
  welcomeScreen?: WelcomeScreen;
  nsfw: boolean;
}
