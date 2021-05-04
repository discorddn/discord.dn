import ClientOptions from "../../lib/interfaces/ClientOptions.ts";
import EventOptions from "../../lib/interfaces/EventOptions.ts";
import APIManager from "../util/APIManager.ts";
import { Websocket } from "../websocket/Websocket.ts";
import ClientUser from "./ClientUser.ts"
import ClientUserResolver from "../resolvers/ClientUserResolver.ts"

/**
 * Starting point of any bot.
 */
export class Client {
	disableEveryone: boolean;
	disableHere: boolean;
	token: string | undefined;
	cache: boolean
	socket: Websocket;
	events: Array<EventOptions>;
	api: APIManager;
	me: ClientUser
	/**
	 * Options for the bot.
	 * @param {ClientOptions}
	 * @example
	 * const client = new Client({
	 *     disableEveryone: true,
	 *     disableHere: true
	 * });
	 */
	constructor(options: ClientOptions={}) {
		// User defined
		this.token = options.token;
		this.disableEveryone = !!options.disableEveryone;
		this.disableHere = !!options.disableHere;
		this.cache = !!options.cache

		// Private
		this.me = new ClientUser({id: "", username: "", tag: "", avatar: "", bot: true}, this)
		this.socket = new Websocket(this);
		this.events = [];
		this.api = new APIManager(this);
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
			this.api.get(`/users/@me`).then(data => {
				this.me = ClientUserResolver(data, this)
			})
			// @ts-expect-error 2322
			const socketResult: boolean = this.socket.connect(token).then(() => res({ websocketConnected: true, token: token })).catch(err => rej({ websocketConnected: false, error: err }));
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
