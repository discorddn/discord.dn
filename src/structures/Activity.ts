import { ActivityOptions } from "../../lib/interfaces/ActivityOptions.ts"
import { Timestamp } from "./Timestamp.ts"
import { Emoji } from "./Emoji.ts"
import { Party } from "./Party.ts"
import { Assets } from "./Assets.ts"
import { Secrets } from "./Secrets.ts"
import { Button } from "./Button.ts"
import { Client } from "./Client.ts"

export class Activity {
    client: Client
    name: string
    type: number
    url?: string
    createdAt: number
    timestamps: Timestamp
    applicationId?: string
    details?: string
    state?: string
    emoji?: Emoji
    party?: Party
    assets?: Assets
    secrets?: Secrets
    instance?: boolean
    flags?: number
    buttons?: Array<Button>

    constructor(options: ActivityOptions, client: Client) {
        this.client = client
        this.name = options.name
        this.type = options.type
        this.url = options.url || ""
        this.createdAt = options.createdAt
        this.timestamps = options.timestamps
        this.applicationId = options.applicationId || ""
        this.details = options.details || ""
        this.state = options.state || ""
        this.emoji = options.emoji || new Emoji({id: "", name: ""}, this.client)
        this.party = options.party || new Party({})
        this.assets = options.assets || new Assets({})
        this.secrets = options.secrets || new Secrets({})
        this.instance = !!options.instance
        this.flags = options.flags ?? 0
        this.buttons = options.buttons || []
    }
}