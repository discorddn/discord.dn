import { Guild } from "../../src/structures/Guild.ts";
import { Channel } from "../../src/structures/Channel.ts";
import { GuildUser } from "../../src/structures/GuildUser.ts";

/**
 * Interface for VoiceStateOptions.
 */
export interface VoiceStateOptions {
  guild: Guild;
  channel: Channel;
  user: GuildUser;
  sessionId: string;
  deaf: boolean;
  mute: boolean;
  selfDeaf: boolean;
  selfMute: boolean;
  selfStreaming?: boolean;
  selfVideo: boolean;
  supress: boolean;
  requestToSpeakTimestamp: string;
}
