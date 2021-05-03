import RoleOptions from "../../lib/interfaces/RoleOptions.ts"
import RoleTag from "./RoleTag.ts"
import { Client } from "./Client.ts"

export default class Role {
    client: Client
    id: string
    name: string
    color: number
    hoist: boolean
    position: number
    permissions: string
    managed: boolean
    mentionable: boolean
    tags: RoleTag | null

    constructor(options: RoleOptions, client: Client) {
        this.client = client
        this.id = options.id
        this.name = options.name
        this.color = options.color
        this.hoist = options.hoist
        this.position = options.position
        this.permissions = options.permissions
        this.managed = options.managed
        this.mentionable = options.mentionable
        this.tags = options.tags || null
    }

    public get createdAt(): number {
        const binary = parseInt(this.id).toString(2)
        return parseInt(binary.slice(0, binary.length - 22), 2) + 1420070400000
    }

    public get createdTimestamp(): Date {
        return new Date(this.createdAt)
    }

}