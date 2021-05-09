import { ActivityOptions } from "../../lib/interfaces/ActivityOptions.ts";
import { Timestamp } from "./Timestamp.ts";
import { Emoji } from "./Emoji.ts";
import { Party } from "./Party.ts";
import { Assets } from "./Assets.ts";
import { Secrets } from "./Secrets.ts";
import { Button } from "./Button.ts";
import { Client } from "./Client.ts";

/**
 * The Activity of a User's Presence.
 */
export class Activity {
  client: Client;
  name: string;
  type: number;
  url?: string;
  createdAt: number;
  timestamps: Timestamp;
  applicationId?: string;
  details?: string;
  state?: string;
  emoji?: Emoji;
  party?: Party;
  assets?: Assets;
  secrets?: Secrets;
  instance?: boolean;
  flags?: number;
  buttons?: Array<Button>;

  constructor(options: ActivityOptions, client: Client) {
    /**
     * The Client.
     * @type {Client}
     */
    this.client = client;

    /**
     * The name of the activity.
     * @type {string}
     */
    this.name = options.name;

    /**
     * The type of the Activity status.
     * @type {number}
     */
    this.type = options.type;

    /**
     * The link to the stream, if any.
     * @type {?string}
     */
    this.url = options.url || "";

    /**
     * The date the Activity was created.
     * @type {number}
     */
    this.createdAt = options.createdAt;

    /**
     * [TBD]
     * @type {Timestamp}
     */
    this.timestamps = options.timestamps;

    /**
     * The ID of the Application associated with this Activity.
     * @type {?string}
     */
    this.applicationId = options.applicationId || "";

    /**
     * The Details about the Activity.
     * @type {?string}
     */
    this.details = options.details || "";

    /**
     * The State of the Activity.
     * @type {?string}
     */
    this.state = options.state || "";

    /**
     * The Emoji for a Custom Activity.
     * @type {?Emoji}
     */
    this.emoji = options.emoji || new Emoji({ id: "", name: "" }, this.client);

    /**
     * The Party of a the Activity.
     * @type {?Party}
     */
    this.party = options.party || new Party({});

    /**
     * The Assets for Rich Presence.
     * @type {?Assets}
     */
    this.assets = options.assets || new Assets({});

    /**
     * The Secrets of an Activity.
     * @type {?Secrets}
     */
    this.secrets = options.secrets || new Secrets({});

    /**
     * [TBD]
     * @type {?boolean}
     */
    this.instance = !!options.instance;

    /**
     * The Flags that describe the Activity.
     * @type {?number}
     */
    this.flags = options.flags ?? 0;

    /**
     * [TBD]
     * @type {?Array<Button>}
     */
    this.buttons = options.buttons || [];
  }
}
