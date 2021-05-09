import { ChannelOverwrite } from "../../src/structures/ChannelOverwrite.ts";
import { User } from "../../src/structures/User.ts";
import { Guild } from "../../src/structures/Guild.ts";
import { Message } from "../../src/structures/Message.ts";
import { ThreadMetadata } from "../../src/structures/ThreadMetadata.ts";
import { ThreadMember } from "../../src/structures/ThreadMember.ts";

/**
 * Interface for ChannelOptions.
 */
export interface ChannelOptions {
  id: string;
  type: number;
  guild?: Guild;
  position?: number;
  permissionOverwrites?: Array<ChannelOverwrite>;
  name?: string;
  topic?: string;
  nsfw?: boolean;
  lastMessage?: Message;
  bitrate?: number;
  userLimit?: number;
  cooldown?: number;
  recipient?: Array<User>;
  icon?: string;
  owner?: User;
  parentId?: string;
  lastPinTimestamp?: string;
  rtcRegion?: string;
  videoQualityMode?: number;
  threadMessageCount?: number;
  threadMemberCount?: number;
  threadMetadata?: ThreadMetadata;
  threadMember?: ThreadMember;
}
