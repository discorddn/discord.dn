import { Client } from "./Client.ts";
import { GuildUser } from "./GuildUser.ts";
import { User } from "./User.ts";
import { Role } from "./Role.ts";
import { Embed } from "./Embed.ts";
import { Attachment } from "./Attachment.ts";
import { Channel } from "./Channel.ts";
import { Guild } from "./Guild.ts";
import { MessageOptions } from "../../lib/interfaces/MessageOptions.ts";

export class Message {
  client!: Client;
  readonly type: number;
  readonly tts: boolean;
  readonly timestamp: string;
  readonly repliedTo?: Message;
  readonly isPinned: boolean;
  readonly nonce: string;
  readonly mentions: Array<GuildUser>;
  readonly mentionRoles: Array<Role>;
  readonly mentionEveryone: boolean;
  readonly id: string;
  readonly flags: number;
  readonly embeds?: Array<Embed>;
  readonly editedTimestamp?: string;
  readonly content: string;
  readonly channel: Channel;
  readonly author: GuildUser | User;
  readonly attachments: Array<Attachment>;
  readonly guild?: Guild;

  constructor(options: MessageOptions, client: Client) {
    this.client = client;
    this.type = options.type;
    this.tts = options.tts;
    this.timestamp = options.timestamp;
    this.repliedTo = options.referencedMessage;
    this.isPinned = options.pinned;
    this.nonce = options.nonce;
    this.mentions = options.mentions || [];
    this.mentionRoles = options.mentionRoles || [];
    this.mentionEveryone = options.mentionEveryone;
    this.id = options.id;
    this.flags = options.flags;
    this.embeds = options.embeds || [];
    this.editedTimestamp = options.editedTimestamp;
    this.content = options.content;
    this.channel = options.channel;
    this.author = options.author;
    this.attachments = options.attachments || [];
    this.guild = options.guild;
  }

  public get createdAt(): number {
    const binary = parseInt(this.id).toString(2);
    return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000;
  }

  public get createdTimestamp(): Date {
    return new Date(this.createdAt);
  }

  public reply(content: string) {
    if (!this.guild?.id) throw Error("Not a guild message");
    return new Promise(async (res, rej) => {
      this.client.api
        .post(`/channels/${this.channel.id}/messages`, {
          content: content,
          message_reference: {
            message_id: this.id,
            channel_id: this.channel.id,
            // @ts-ignore
            guild_id: this.guild.id,
            fail_if_not_exists: false,
          },
        })
        .then(res)
        .catch(rej);
    });
  }
}
