import EventOptions from "../../lib/interfaces/EventOptions.ts";
import { Client } from "../structures/Client.ts";

export class Websocket {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	/**
	 * Connects to the Discord Gateway.
	 * @returns {Promise<ConnectionStatus>}
	 */
	async connect(token: string) {
		return new Promise(async (res, rej) => {
			const socket = new WebSocket("wss://gateway.discord.gg/gateway/bot");

			socket.addEventListener("message", event => {
				const message = JSON.parse(event.data);
				if (message.op === 0) {
					// Event - receive events
					const event = this.client.events.find((e: EventOptions) => e.eventName === message.t);
					if(!event) return; // Do not emit event
					if(typeof event.callback !== "function") throw new TypeError("Callback for event " + event.eventName + " isn't a valid function.")
					event.callback(message.d);
				} else if(message.op === 1) {
					// Heartbeat - respond if code online
					socket.send(JSON.stringify({ "op": 1, "d": null }));
				} else if(message.op === 10) {
					// Hello - connected
					socket.send(JSON.stringify({ "op": 2, "d": { token: token, intents: 513, properties: { $os: "linux", $browser: "my_library", $device: "my_library" } }}))
					res(true);
					setInterval(() => {
						socket.send(JSON.stringify({ "op": 1, "d": null }));
					}, parseInt(message.d.heartbeat_interval))
				}
			});
		})
	}
}
