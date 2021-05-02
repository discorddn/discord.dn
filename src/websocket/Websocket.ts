import { Client } from "../structures/Client.ts";
import EventOptions from "../../lib/interfaces/EventOptions.ts";
import Message from "../structures/Message.ts"

export class Websocket {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	async connect(token: string) {
		return new Promise(async (resolve, reject) => {

			const socket = new WebSocket("wss://gateway.discord.gg/gateway/bot?v=9&encoding=json");

			socket.addEventListener('message', event => {
				const message = JSON.parse(event.data);
				if (message.op == 0) {
					const event = this.client.events.find((e: EventOptions) => e.eventName == message.t);
					if (!event) return;
					if (typeof event.callback != "function") throw new TypeError(`Callback for event ${event.eventName} isn't a valid function.`);
					event.callback(message.d, this.client)
				} else if (message.op == 1) {
					socket.send(JSON.stringify({ "op": 1, "d": null }));
				} else if (message.op == 9) {
					console.error(`The session has been invalidated\nDetails : ${message}`)
				} else if (message.op == 10) {
					socket.send(JSON.stringify({
						"op": 2,
						"d": {
							token: token,
							intents: 513,
							properties: {
								$os: "linux",
								$browser: "my_library",
								$device: "my_library"
							}
						}
					}));
					resolve(true);
					setInterval(() => socket.send(JSON.stringify({ "op": 1, "d": null })), parseInt(message.d.heartbeat_interval));
				}
			})
		});
	}
}
