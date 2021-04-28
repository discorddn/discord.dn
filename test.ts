import { Client } from "./src/structures/Client.ts";
import Message from "./src/structures/Message.ts"
const client = new Client();

client.registerEvent("MESSAGE_CREATE", async (message: Message) => {
    message.reply("ok")
});

client.login("ODM2MjY0MDQxODk4MDQ5NTM2.YIbdlA.54xiah6qoI2s7RwUMwpT_FLHuLk").then((state: any) => console.log("Login state", state));
