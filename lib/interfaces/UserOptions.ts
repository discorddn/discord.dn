export default interface UserOptions {
    id: string 
    username: string 
    tag: string
    avatar: string 
    bot: boolean 
    system?: boolean
    locale?: string
    flags?: number
}