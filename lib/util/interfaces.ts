export interface ClientOptions {
    token?: string;
    disableEveryone?: boolean;
    disableHere?: boolean;
}

export interface EventOptions {
    eventName: string;
    callback: Function;
}