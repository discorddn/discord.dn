import { Client } from "./src/structures/Client.ts";
import { Message } from "./src/structures/Message.ts";
import { Channel } from "./src/structures/Channel.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const client = new Client();
const channel = new Channel(
  {
    id: "811223685112266756",
    type: 0,
  },
  client
);
client.registerEvent("MESSAGE_CREATE", async (message: Message) => {
  if (!message.content.startsWith("!run")) return;
  const name = message.content.split(" ")[1];
  await client.me.updateName(name);
});
client
  .login(Deno.env.get("TOKEN") ?? "")
  .then((state: any) => console.log("Login state", state));
