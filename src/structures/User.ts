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
    
    public get avatarUrl(): string {
        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}`
    }

    public createdAt(): number {
        const binary = parseInt(this.id).toString(2)
        return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000
    }

    public get createdTimestamp(): Date {
        return new Date(this.createdAt())
    }

}