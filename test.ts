import { Client } from "./src/structures/Client.ts";
import Message from "./src/structures/Message.ts"
import Channel from "./src/structures/Channel.ts"
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const client = new Client();
const channel = new Channel({
    id: "811223685112266756",
    type: 0
}, client)
client.registerEvent("MESSAGE_CREATE", async (message: Message) => {
    if (!message.content.startsWith("!run")) return
    const id = message.content.split(" ")[1]
    const user = await client.fetchUser(id)
    channel.send(user.avatarUrl({format:  message.content.split(" ")[2] == "gif" ? "gif" : "png", size: 4096}))
});
client.login(Deno.env.get("TOKEN") ?? "cock").then((state: any) => console.log("Login state", state));
