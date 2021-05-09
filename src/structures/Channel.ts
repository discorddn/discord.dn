import { ChannelOptions } from "../../lib/interfaces/ChannelOptions.ts";
import { Guild } from "./Guild.ts";
import { ChannelOverwrite } from "./ChannelOverwrite.ts";
import { Message } from "./Message.ts";
import { User } from "./User.ts";
import { ThreadMetadata } from "./ThreadMetadata.ts";
import { ThreadMember } from "./ThreadMember.ts";
import { Client } from "./Client.ts";

/**
 * The Class for any Discord Channel.
 */
export class Channel {
  client: Client;
  id: string;
  type: number;
  guild: Guild | null;
  position: number | null;
  permissionOverwrites: Array<ChannelOverwrite> | null;
  name: string | null;
  topic: string | null;
  nsfw: boolean | null;
  lastMessage: Message | null;
  bitrate: number | null;
  userLimit: number | null;
  cooldown: number | null;
  recipient: Array<User> | null;
  icon: string | null;
  owner: User | null;
  parentId: string | null;
  lastPinTimestamp: string | null;
  rtcRegion: string | null;
  videoQualityMode: number | null;
  threadMessageCount: number | null;
  threadMemberCount: number | null;
  threadMetadata: ThreadMetadata | null;
  threadMember: ThreadMember | null;

  constructor(options: ChannelOptions, client: Client) {
    /**
     * The Client.
     * @type {Client}
     */
    this.client = client;

    /**
     * The ID of the Channel.
     * @type {string}
     */
    this.id = options.id;

    /**
     * The Type of the Channel.
     * @type {number}
     */
    this.type = options.type;

    /**
     * The Guild to which the Channel belongs to.
     * @type {Guild | null}
     */
    this.guild = options.guild || null;

    /**
     * The Position of the Channel.
     * @type {number | null}
     */
    this.position = options.position || null;

    /**
     * [TBD]
     * @type {Array<ChannelOverwrite> | null}
     */
    this.permissionOverwrites = options.permissionOverwrites || null;

    /**
     * The name of a Channel.
     * @type {string | null}
     */
    this.name = options.name || null;

    /**
     * The topic of a Channel.
     * @type {string | null}
     */
    this.topic = options.topic || null;

    /**
     * If the Channel is considered NSFW.
     * @type {boolean | null}
     */
    this.nsfw = options.nsfw || null;

    /**
     * The last Message in a Channel.
     * @type {Message | null}
     */
    this.lastMessage = options.lastMessage || null;

    /**
     * The Bitrate of a Voice Channel.
     * @type {number | null}
     */
    this.bitrate = options.bitrate || null;

    /**
     * The maximum amount of users allowed in a Voice Channel.
     * @type {number | null}
     */
    this.userLimit = options.userLimit || null;

    /**
     * The ratelimit at which a user can send messages in a Channel.
     * @type {number | null}
     */
    this.cooldown = options.cooldown || null;

    /**
     * [TBD]
     * @type {Array<User> | null}
     */
    this.recipient = options.recipient || null;

    /**
     * [TBD]
     * @type {string | null}
     */
    this.icon = options.icon || null;

    /**
     * [TBD]
     * @type {User | null}
     */
    this.owner = options.owner || null;

    /**
     * The ID of the Parent Channel.
     * @type {string | null}
     */
    this.parentId = options.parentId || null;

    /**
     * The Timestamp of the last pin in a Channel.
     * @type {string | null}
     */
    this.lastPinTimestamp = options.lastPinTimestamp || null;

    /**
     * The RTC Region of a Voice Channel.
     * @type {string | null}
     */
    this.rtcRegion = options.rtcRegion || null;

    /**
     * The Video Quality Mode of a Voice Channel.
     * @type {number | null}
     */
    this.videoQualityMode = options.videoQualityMode || null;

    /**
     * [TBD]
     * @type {number | null}
     */
    this.threadMessageCount = options.threadMessageCount || null;

    /**
     * [TBD]
     * @type {number | null}
     */
    this.threadMemberCount = options.threadMemberCount || null;

    /**
     * [TBD]
     * @type {ThreadMember | null}
     */
    this.threadMetadata = options.threadMetadata || null;

    /**
     * [TBD]
     * @type {ThreadMember | null}
     */
    this.threadMember = options.threadMember || null;
  }

  /**
   * Sets a new name for a Channel.
   * @param {string} name
   */
  public setName(name: string) {
    if (!(name.length >= 2 && name.length <= 100))
      throw Error("Channel name is not between 2-100 characters");
    this.client.api.patch(`/channels/${this.id}`, {
      name,
    });
    this.name = name;
    return this;
  }

  /**
   * Sets whether a Channel should be flagged as NSFW.
   * @param {boolean} nsfw
   */
  public setNSFW(nsfw: boolean) {
    if (this.type != 0) throw new TypeError("Channel does not support NSFW");
    this.client.api.patch(`/channels/${this.id}`, {
      nsfw,
    });
    this.nsfw = nsfw;
    return this;
  }

  /**
   * Sets the topic for a Channel.
   * @param {string} topic
   */
  public setTopic(topic: string) {
    if (this.type != 0) throw new TypeError("Channel does not support topics");
    this.client.api.patch(`/channels/${this.id}`, {
      topic,
    });
    this.topic = topic;
    return this;
  }

  /**
   * Sets the Position of a Channel.
   * @param {number} position
   */
  public setPosition(position: number) {
    this.client.api.patch(`/channels/${this.id}`, {
      position,
    });
    this.position = position;
    return this;
  }

  /**
   * Sets the cooldown for a Channel.
   * @param {number} rate_limit_per_user
   */
  public setCooldown(rate_limit_per_user: number) {
    if (this.type != 0)
      throw new TypeError("Channel does not support cooldowns");
    this.client.api.patch(`/channels/${this.id}`, {
      rate_limit_per_user,
    });
    this.cooldown = rate_limit_per_user;
    return this;
  }

  /**
   * Sets the bitrate for a Voice Channel.
   * @param {number} bitrate
   */
  public setBitrate(bitrate: number) {
    if (this.type != 2) throw TypeError("Channel is not a voice channel");
    if (bitrate < 8000 || bitrate > 128000)
      throw TypeError(
        `Bitrate Value "${bitrate}" is below 8000 or above 128000`
      );
    this.client.api.patch(`/channels/${this.id}`, {
      bitrate,
    });
    this.bitrate = bitrate;
    return this;
  }

  /**
   * Sets the Maximum User Limit for a Voice Channel.
   * @param {number} user_limit
   */
  public setUserLimit(user_limit: number) {
    if (this.type != 2) throw TypeError("Channel is not a voice channel");
    if (user_limit > 99) throw TypeError("User limit is larger than 99");
    this.client.api.patch(`/channels/${this.id}`, {
      user_limit,
    });
    this.userLimit = user_limit;
    return this;
  }

  /**
   * Sends a Message to a Channel.
   * @param {string} content
   */
  public send(content: string) {
    if (content == "") throw Error("Content can't be blank");
    this.client.api.post(`/channels/${this.id}/messages`, {
      content,
    });
    // i need to change this to return a message object but i need resolvers for that and im too lazy to make rn so yeahhhhhh
    return this;
  }

  /**
   * Triggers the typing indicator in a Channel.
   */
  public triggerTyping() {
    this.client.api.post(`/channels/${this.id}/typing`, {});
  }

  /**
   * Deletes a Channel.
   */
  public delete() {
    this.client.api.delete(`/channels/${this.id}`);
  }
}
