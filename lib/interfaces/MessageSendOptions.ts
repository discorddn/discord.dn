import { Embed } from "../../src/structures/Embed.ts";
import { Attachment } from "../../src/structures/Attachment.ts";
import { Message } from "../../src/structures/Message.ts";

/**
 * Interface for MessageSendOptions.
 */
export interface MessageSendOptions {
  reply?: Message;
  pinned: boolean;
  embeds: Array<Embed>;
  channelId: string;
  attachments: Array<Attachment>;
}
