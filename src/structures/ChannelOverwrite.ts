import ChannelOverwriteOptions from "../../lib/interfaces/ChannelOverwriteOptions.ts"

export default class ChannelOverwrite {
    readonly id: string
    readonly type: number
    readonly allow: string
    readonly deny: string

    constructor(options: ChannelOverwriteOptions) {
        this.id = options.id
        this.type = options.type
        this.allow = options.allow
        this.deny = options.deny
    }
}