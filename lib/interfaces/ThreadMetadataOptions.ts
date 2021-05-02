import GuildUser from "../../src/structures/GuildUser.ts"

export default interface ThreadMetadataOptions {
    archived: boolean
    archiver?: GuildUser
    autoArchiveDuration: number
    archiveTimestamp: string
    locked?: boolean
}