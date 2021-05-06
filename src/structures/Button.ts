import ButtonOptions from "../../lib/interfaces/ButtonOptions.ts"

export default class Button {
    label: string
    url: string

    constructor(options: ButtonOptions) {
        this.label = options.label
        this.url = options.url
    }
}