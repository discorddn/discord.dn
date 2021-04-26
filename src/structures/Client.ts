import { ClientOptions } from "../../lib/util/interfaces.ts";
import { Websocket } from "../websocket/Websocket.ts";

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
     * @returns {Promise<boolean>}
     * @example client.login('token');
     */
    async login(token: string) {
        return new Promise((res, rej) => {
            if (!token || !token.length) throw new Error("INVALID_TOKEN");
            this.token = token.replace(/^(Bot|Bearer)\s*/i, "");
            const socket = new WebSocket("wss://gateway.discord.gg/gateway/bot");
            let isConnected: boolean = false;

            socket.addEventListener('open', function (event) {
                isConnected = true;
                socket.send('Hello Server!');
            });

            socket.addEventListener('message', function (event) {
                console.log('Message from server ', event.data);
            });
            res(isConnected);
        })
    }
};
