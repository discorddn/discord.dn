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

            socket.addEventListener("message", function (event) {
                const message = JSON.parse(event.data);
                /*
                0	Dispatch	Receive	An event was dispatched.
                1	Heartbeat	Send/Receive	Fired periodically by the client to keep the connection alive.
                2	Identify	Send	Starts a new session during the initial handshake.
                3	Presence Update	Send	Update the client's presence.
                4	Voice State Update	Send	Used to join/leave or move between voice channels.
                6	Resume	Send	Resume a previous session that was disconnected.
                7	Reconnect	Receive	You should attempt to reconnect and resume immediately.
                8	Request Guild Members	Send	Request information about offline guild members in a large guild.
                9	Invalid Session	Receive	The session has been invalidated. You should reconnect and identify/resume accordingly.
                10	Hello	Receive	Sent immediately after connecting, contains the heartbeat_interval to use.
                11	Heartbeat ACK	Receive	Sent in response to receiving a heartbeat to acknowledge that it has been received.
                 */
                if(message.op === 0) {
                    // Heartbeat - respond if code online
                    console.log("Event > ", message.d);
                } else if(message.op === 1) {
                    // Heartbeat - respond if code online
                    socket.send(JSON.stringify({ "op": 1, "d": null }));
                } else if(message.op === 10) {
                    // Hello - connected
                    socket.send(JSON.stringify({ "op": 2, "d": { token: token, intents: 513, properties: { $os: "linux", $browser: "my_library", $device: "my_library" } }})) // Boot up bot
                    res(true);
                    setInterval(() => {
                        console.log("Acking Discord API back.");
                        socket.send(JSON.stringify({ "op": 1, "d": null }));
                    }, parseInt(message.d.heartbeat_interval))
                }
            });
        })
    }
};
