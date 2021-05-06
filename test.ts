import { Client } from "./src/structures/Client.ts";
import Message from "./src/structures/Message.ts"
import Channel from "./src/structures/Channel.ts"
const client = new Client();
const channel = new Channel({
    id: "811223685112266756",
    type: 0
}, client)
client.registerEvent("MESSAGE_CREATE", async (message: Message) => {
    if (!message.content.startsWith("!run")) return
    const id = message.content.split(" ")[1]
    // const x = client.fetchUser(id)
});
client.login("ODM2MjY0MDQxODk4MDQ5NTM2.YIbdlA.54xiah6qoI2s7RwUMwpT_FLHuLk").then((state: any) => console.log("Login state", state));
