import { PartyOptions } from "../../lib/interfaces/PartyOptions.ts"

export class Party {
    id: string
    size: [number, number]

    constructor(options: PartyOptions) {
        this.id = options.id || ""
        this.size = options.size || [0, 0]
    }
}