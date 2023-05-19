export default class Payment {

	constructor (
		readonly idPayment: string,
		readonly date: Date,
		readonly amount: number
	) {
	}
}
