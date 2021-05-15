import { Client } from "./src/structures/Client.ts";
import { Message } from "./src/structures/Message.ts";
import { Channel } from "./src/structures/Channel.ts";
import { Embed } from "./src/structures/Embed.ts";
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
  const embed = new Embed({
    color: "#ff69b4",
    title: "benis geng",
    timestamp: (new Date()).toISOString(),
    description: "uwu"
  })
  embed.addField("uwu", "owo")
  embed.setThumbnail("https://cdn.discordapp.com/attachments/811223685112266756/843037431112663100/unknown.png",)
  channel.send(embed)
});
client
  .login(Deno.env.get("TOKEN") ?? "")
  .then((state: any) => console.log("Login state", state));
