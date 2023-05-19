import Contract from "./Contract";
import Invoice from "./Invoice";
import InvoiceGenerationStrategy from "./InvoiceGenerationStrategy";

export default class CashBasisStrategy implements InvoiceGenerationStrategy {

	generate(contract: Contract, month: number, year: number): Invoice[] {
		const invoices: Invoice[] = [];
		for (const payment of contract.getPayments()) {
			if (payment.date.getMonth() + 1 !== month || payment.date.getFullYear() !== year) continue;
			invoices.push(new Invoice(payment.date, payment.amount));
		}
		return invoices;
	}

}