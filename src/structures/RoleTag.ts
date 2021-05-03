import RoleTagOptions from "../../lib/interfaces/RoleTagOptions.ts"

export default class RoleTag {
    readonly botId: string
    readonly integreationId: string
    readonly premiumSubscriber: null

    constructor(options: RoleTagOptions) {
        this.botId = options.botId
        this.integreationId = options.integreationId
        this.premiumSubscriber = options.premiumSubscriber
    }
}