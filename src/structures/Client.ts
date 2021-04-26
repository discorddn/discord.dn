import { ClientOptions } from "../../lib/util/interfaces.ts";
import { Websocket } from "../websockets/Websocket.ts";

/**
 * Starting point of any bot.
 */
export default class Client {
    disableEveryone: boolean;
    disableHere: boolean;
    token?: string
    
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
        this.token = options.token;
        this.disableEveryone = !!options.disableEveryone;
        this.disableHere = !!options.disableHere;
    }

    /**
     * Logs the client to Discord using a websocket connection.
     * @returns {Promise<boolean>} // temporary lol
     * @example client.login('token');
     */
    async login(token: string) {
        return new Promise((res, rej) => {
            if (!token || !this.token) throw new Error('INVALID_TOKEN');
            this.token = token.replace(/^(Bot|Bearer)\s*/i, '');
            Websocket.connect();
        })
    }
};