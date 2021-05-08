import { Client } from "../structures/Client.ts";
import { APIParameters } from "../../lib/interfaces/APIParameters.ts"
export class APIManager {
	private DISCORD_API_BASE: string = "https://discord.com/api/v9";

	private client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	get(url: string, params: APIParameters = {}) {
		return new Promise(async (res, rej) => {
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

	delete(url: string, params?: APIParameters) {
		return new Promise(async (res, rej) => {
			fetch(this.DISCORD_API_BASE + url, { method: "DELETE", headers: { 'Content-Type': "application/json", 'Authorization': "Bot " + this.client.token } })
				.then(d => d.json())
				.then(response => res(response))
				.catch(err => rej);
		});
	}

	patch(url: string, body: object, params?: APIParameters) {
		return new Promise(async (res, rej) => {
			fetch(this.DISCORD_API_BASE + url, { method: "PATCH", body: JSON.stringify(body), headers: { 'Content-Type': "application/json", 'Authorization': "Bot " + this.client.token } })
				.then(d => d.json())
				.then(response => res(response))
				.catch(err => rej);
		});
	}

	put(url: string, body: object, params?: APIParameters) {
		return new Promise(async (res, rej) => {
			fetch(this.DISCORD_API_BASE + url, { method: "PUT", body: JSON.stringify(body), headers: { 'Content-Type': "application/json", 'Authorization': "Bot " + this.client.token } })
				.then(d => d.json())
				.then(response => res(response))
				.catch(err => rej);
		});
	}
}
