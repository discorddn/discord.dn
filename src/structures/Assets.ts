import AssetsOptions from "../../lib/interfaces/AssetsOptions.ts"

export default class Assets {
    largeImage: string
    largeText: string
    smallImage: string
    smallText: string

    constructor(options: AssetsOptions) {
        this.largeImage = options.largeImage || ""
        this.largeText = options.largeText || ""
        this.smallImage = options.smallImage || ""
        this.smallText = options.smallText || ""
    }
}