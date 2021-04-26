import { ClientOptions, EventOptions } from "../../lib/util/interfaces.ts";
import { Websocket } from "../websocket/Websocket.ts";

/**
 * Starting point of any bot.
 */
export class Client {
	disableEveryone: boolean;
	disableHere: boolean;
	token: string | undefined;
	socket: Websocket;
	events: Array<EventOptions>;
	/**
	 * Options for the bot.
	 * @param {ClientOptions}
	 * @example
	 * const client = new Client({
	 *     disableEveryone: true,
	 *     disableHere: true
	 * });
	 */
	constructor(options: ClientOptions) {
		// User defined
		this.token = options.token;
		this.disableEveryone = !!options.disableEveryone;
		this.disableHere = !!options.disableHere;
		
		// Private
		this.socket = new Websocket(this);
		this.events = [];
	}

	/**
	 * Logs the client to Discord using a websocket connection.
	 * @returns {Promise<LoginResult>}
	 * @example client.login('token');
	 */
	async login(token: string) {
		return new Promise(async (res, rej) => {
			if (!token || !token.length) throw new Error("INVALID_TOKEN");
			this.token = token.replace(/^(Bot|Bearer)\s*/i, "");
			let isConnected: boolean = false;
			// @ts-expect-error 2322
			const socketResult: boolean = await this.socket.connect(token);
			res({ websocketConnected: socketResult, token: token });
		})
	}

	registerEvent(eventName: string, callback: Function) {
		this.events.push({ eventName: eventName, callback: callback });
		return this.events;
	}

	unregisterEvent(eventName: string) {
		this.events = this.events.filter(r => r.eventName !== eventName);
		return this.events;
	}
};
