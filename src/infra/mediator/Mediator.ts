export default class Mediator {
	observers: { event: string, callback: Function }[];

	constructor () {
		this.observers = [];
	}

	on (event: string, callback: Function) {
		this.observers.push({ event, callback });
	}

	async publish (event: string, data: any) {
		for (const observer of this.observers) {
			if (observer.event === event) {
				await observer.callback(data);
			}
		}
	}
}
