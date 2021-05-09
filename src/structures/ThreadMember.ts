import { ThreadMemberOptions } from "../../lib/interfaces/ThreadMemberOptions.ts";
import { Channel } from "./Channel.ts";
import { GuildUser } from "./GuildUser.ts";

export class ThreadMember {
  readonly channel: Channel;
  readonly user: GuildUser;
  readonly joinTimestamp: string;
  readonly flags: number;

  constructor(options: ThreadMemberOptions) {
    this.channel = options.channel;
    this.user = options.user;
    this.joinTimestamp = options.joinTimestamp;
    this.flags = options.flags;
  }
}
