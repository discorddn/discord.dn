import { Client } from "../structures/Client.ts";

interface APIParameters {
	headers?: Array<any>;

}

export default class APIManager {
	private DISCORD_API_BASE: string = "https://discord.com/api/v8";

	private client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	get(url: string, params: APIParameters) {
		return new Promise(async (res, rej) => {
			// @ts-ignore
			fetch(this.DISCORD_API_BASE + url, { method: "GET", headers: { 'Content-Type': "application/json", 'Authorization': "Bot " + this.client.token } })
				.then(d => d.json())
				.then(response => res(response))
				.catch(err => rej);
		});
	}

	post(url: string, body: object, params?: APIParameters) {
		return new Promise(async (res, rej) => {
			fetch(this.DISCORD_API_BASE + url, { method: "POST", body: JSON.stringify(body), headers: { 'Content-Type': "application/json", 'Authorization': "Bot " + this.client.token } })
				.then(d => d.json())
				.then(response => res(response))
				.catch(err => rej);
		});
	}
}
