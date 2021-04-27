import { Client } from "./src/structures/Client.ts";
const client = new Client({});

client.registerEvent("MESSAGE_CREATE", async (message: any) => {
	if(!message.guild_id) return;
	if(!message.content.startsWith("?say")) return;

});

client.login("ODM2MjY0MDQxODk4MDQ5NTM2.YIbdlA.54xiah6qoI2s7RwUMwpT_FLHuLk").then(state => console.log("Login state", state));
