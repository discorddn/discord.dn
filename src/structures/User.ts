export interface AvatarUrlOptions {
    format: "png" | "jpg" | "webp" | "gif"
    size?: 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096
}

export default class User {
    readonly id: string;
    readonly username: string;
    readonly tag: string;
    readonly avatar: string;
    readonly bot: boolean;
    readonly system: boolean;
    readonly locale: string;
    readonly flags: number;

    constructor(id: string, username: string, tag: string, avatar: string, bot: boolean, system: boolean=true, locale: string="", flags: number=0) {
        this.id = id
        this.username = username
        this.tag = tag
        this.avatar = avatar
        this.bot = bot
        this.system = system
        this.locale = locale
        this.flags = flags
    }

    
    public get fullName(): string {
        return `${this.username}#${this.tag}`
    }
    
    public avatarUrl(options: AvatarUrlOptions): string {
        return `https://cdn.discordapp.com/${this.id}/${this.avatar}.${options.format || "png"}` + options.size ? `size=${options.size}` : ""
    }

    public createdAt(): number {
        const binary = parseInt(this.id).toString(2)
        return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000
    }

    public get createdTimestamp(): Date {
        return new Date(this.createdAt())
    }

}