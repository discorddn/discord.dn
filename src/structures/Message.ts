import { Client } from "./Client.ts";
import MessageSendOptions from "../../lib/interfaces/MessageSendOptions.ts";

export default class Message {
    private client!: Client;

    send(content: string, options: MessageSendOptions) {
    	return new Promise(async (res, rej) => {
			this.client.api.post("/channels/836209940128596008/messages", { content /* Add more options */ }).then(res).catch(rej)
		});
	}
}
