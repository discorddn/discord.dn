import RoleTag from "../../src/structures/RoleTag.ts"

export default interface RoleOptions {
    id: string
    name: string
    color: number
    hoist: boolean
    position: number
    permissions: string
    managed: boolean
    mentionable: boolean
    tags?: RoleTag
}