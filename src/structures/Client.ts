import { ClientOptions } from "../../lib/interfaces/ClientOptions.ts";
import { EventOptions } from "../../lib/interfaces/EventOptions.ts";
import { APIManager } from "../util/APIManager.ts";
import { Websocket } from "../websocket/Websocket.ts";
import { ClientUser } from "./ClientUser.ts";
import { ClientUserResolver } from "../resolvers/ClientUserResolver.ts";
import { UserResolver } from "../resolvers/UserResolver.ts";

/**
 * Starting point of any bot.
 */
export class Client {
  disableEveryone: boolean;
  disableHere: boolean;
  token: string | undefined;
  cache: boolean;
  socket: Websocket;
  events: Array<EventOptions>;
  api: APIManager;
  me: ClientUser;
  /**
   * Options for the bot.
   * @param {ClientOptions}
   * @example
   * const client = new Client({
   *     disableEveryone: true,
   *     disableHere: true
   * });
   */
  constructor(options: ClientOptions = {}) {
    // User defined
    this.token = options.token;
    this.disableEveryone = !!options.disableEveryone;
    this.disableHere = !!options.disableHere;
    this.cache = !!options.cache;

    // Private
    this.me = new ClientUser(
      { id: "", username: "", tag: "", avatar: "", bot: true },
      this
    );
    this.socket = new Websocket(this);
    this.events = [];
    this.api = new APIManager(this);
  }

  /**
   * Logs the client to Discord using a websocket connection.
   * @returns {Promise<LoginResult>}
   * @example client.login('token');
   */
  public async login(token: string) {
    return new Promise(async (res, rej) => {
      if (!token || !token.length) throw new Error("INVALID_TOKEN");
      this.token = token.replace(/^(Bot|Bearer)\s*/i, "");
      this.me = ClientUserResolver(await this.api.get(`/users/@me`), this);
      // @ts-expect-error 2322
      const socketResult: boolean = this.socket
        .connect(token)
        .then(() => res({ websocketConnected: true, token: token }))
        .catch((err) => rej({ websocketConnected: false, error: err }));
    });
  }

  public registerEvent(eventName: string, callback: Function) {
    this.events.push({ eventName, callback });
    return this.events;
  }

  public unregisterEvent(eventName: string) {
    this.events = this.events.filter((r) => r.eventName !== eventName);
    return this.events;
  }

  public async fetchUser(id: string) {
    return UserResolver(await this.api.get(`/users/${id}`), this);
  }
}
