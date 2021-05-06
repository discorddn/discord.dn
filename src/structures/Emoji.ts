import EmojiOptions from "../../lib/interfaces/EmojiOptions.ts"
import Role from "./Role.ts"
import User from "./User.ts"
import { Client } from "./Client.ts"

export default class Emoji {
    client: Client
    id: string
    name: string
    roles?: Array<Role>
    user?: User
    requireColons?: boolean
    managed?: boolean
    animated?: boolean
    available?: boolean

    constructor(options: EmojiOptions, client: Client) {
        this.client = client
        this.id = options.id
        this.name = options.name
        this.roles = options.roles || []
        this.user = options.user || new User({id: "", username: "", tag: "", avatar: "", bot: false}, this.client)
    }
}