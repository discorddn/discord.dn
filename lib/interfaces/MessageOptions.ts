import { GuildUser } from "../../src/structures/GuildUser.ts";
import { User } from "../../src/structures/User.ts";
import { Role } from "../../src/structures/Role.ts";
import { Embed } from "../../src/structures/Embed.ts";
import { Attachment } from "../../src/structures/Attachment.ts";
import { Message } from "../../src/structures/Message.ts";
import { Channel } from "../../src/structures/Channel.ts";
import { Guild } from "../../src/structures/Guild.ts";
import { Reaction } from "../../src/structures/Reaction.ts";
import { Sticker } from "../../src/structures/Sticker.ts";

/**
 * Interface for MessageOptions.
 */
export interface MessageOptions {
  type: number;
  tts: boolean;
  timestamp: string;
  referencedMessage?: Message;
  pinned: boolean;
  nonce: string;
  mentions?: Array<GuildUser>;
  mentionRoles?: Array<Role>;
  mentionChannels?: Array<Channel>;
  mentionEveryone: boolean;
  id: string;
  flags: number;
  embeds?: Array<Embed>;
  editedTimestamp?: string;
  content: string;
  channel: Channel;
  author: GuildUser | User;
  attachments?: Array<Attachment>;
  reactions?: Array<Reaction>;
  stickers?: Array<Sticker>;
  guild?: Guild;
}
