import Timestamp from "../../src/structures/Timestamp.ts"
import Emoji from "../../src/structures/Emoji.ts"
import Party from "../../src/structures/Party.ts"
import Assets from "../../src/structures/Assets.ts"
import Secrets from "../../src/structures/Secrets.ts"
import Button from "../../src/structures/Button.ts"

export default interface ActivityOptions {
    name: string
    type: number
    url?: string
    createdAt: number
    timestamps: Timestamp
    applicationId?: string
    details?: string
    state?: string
    emoji?: Emoji
    party?: Party
    assets?: Assets
    secrets?: Secrets
    instance?: boolean
    flags?: number
    buttons?: Array<Button>
}