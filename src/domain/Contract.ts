import Invoice from "./Invoice";
import InvoiceGenerationFactory from "./InvoiceGenerationFactory";
import InvoiceGenerationStrategy from "./InvoiceGenerationStrategy";
import Payment from "./Payment";
import moment from "moment";

export default class Contract {
	private payments: Payment[];

	constructor (
		readonly idContract: string,
		readonly description: string,
		readonly amount: number,
		readonly periods: number,
		readonly date: Date
	) {
		this.payments = [];
	}

	addPayment (payment: Payment) {
		this.payments.push(payment);
	}

	getPayments () {
		return this.payments;
	}

	getBalance () {
		let balance = this.amount;
		for (const payment of this.payments) {
			balance -= payment.amount;
		}
		return balance;
	}

	generateInvoices (month: number, year: number, type: string) {
		const invoiceGenerationStrategy = InvoiceGenerationFactory.create(type);
		return invoiceGenerationStrategy.generate(this, month, year);
	}
}
