import { Client } from "./Client.ts"
import { User } from "./User.ts"
import { UserOptions } from "../../lib/interfaces/UserOptions.ts"

export class ClientUser extends User {

    constructor(options: UserOptions, client: Client) {
        super(options, client)
    }

    public updateName(username: string) {
        this.client.api.patch(`/users/@me`, {
            username
        }).then(data => console.log(data))
        this.username = username
    }

    public updateAvatar(avatar: string) {
        this.client.api.patch(`/users/@me`, {
            avatar
        })
    }
}