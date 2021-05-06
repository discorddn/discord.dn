import AvatarUrlOptions from "../../lib/interfaces/AvatarURLOptions.ts"
import UserOptions from "../../lib/interfaces/UserOptions.ts"
import { Client } from "./Client.ts"

export default class User {
    client: Client
    id: string 
    username: string 
    tag: string
    avatar: string 
    bot: boolean 
    system: boolean
    mfaEnabled: boolean
    locale: string
    email: string
    verified: boolean
    flags: number

    constructor(options: UserOptions, client: Client) {
        this.client = client
        this.id = options.id
        this.username = options.username
        this.tag = options.tag
        this.avatar = options.avatar
        this.bot = options.bot
        this.system = !!options.system
        this.locale = options.locale || ""
        this.flags = options.flags || 0
        this.mfaEnabled = !!options.mfaEnabled
        this.email = options.email || ""
        this.verified = !!options.verified
    }

    public get fullName(): string {
        return `${this.username}#${this.tag}`
    }
    
    public avatarUrl(options: AvatarUrlOptions): string {
        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${options.format || "png"}${!!options.size ? "?size=" + options.size : ""}` 
    }

    public get createdAt(): number {
        const binary = parseInt(this.id).toString(2)
        return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000
    }

    public get createdTimestamp(): Date {
        return new Date(this.createdAt)
    }

    public async openDM() {
        return await this.client.api.post("/users/@me/channels", {
            recipient_id: this.id
        })
    }

    public async send(content: string) {
        const dmChannel: any = await this.openDM()
        return await this.client.api.post(`/channels/${dmChannel.id}/messages`, {
            content
        })
    }
}