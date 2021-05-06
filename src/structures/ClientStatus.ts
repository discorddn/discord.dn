import ClientStatusOptions from "../../lib/interfaces/ClientStatusOptions.ts"

export default class ClientStatus {
    desktop: string
    mobile: string
    web: string

    constructor(options: ClientStatusOptions) {
        this.desktop = options.desktop || ""
        this.mobile = options.mobile || ""
        this.web = options.web || ""
    }
}