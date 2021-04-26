export class Websocket {
    private token: string
    constructor(token: string) {
        this.token = token;
    }

    /**
     * Connects to the Discord Gateway.
     * @returns {Promise<Connection>}
     */
    async connect() {
        return new Promise(async (res, rej) => {
            const conn = new WebSocket("wss://gateway.discord.gg/gateway/bot");
            conn.onopen = async () => {
                const sendResponse = conn.send("hi discord");
                console.log(sendResponse);
            }
        })
    }
}