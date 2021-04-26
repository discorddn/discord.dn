import { Client } from "./src/structures/Client.ts";

const client = new Client({});

const events = client.registerEvent("MESSAGE_CREATE", (message: Object) => {
    console.log("event registering works")
});

client.login("ODM2MjY0MDQxODk4MDQ5NTM2.YIbdlA.54xiah6qoI2s7RwUMwpT_FLHuLk").then(r => console.log(r));
