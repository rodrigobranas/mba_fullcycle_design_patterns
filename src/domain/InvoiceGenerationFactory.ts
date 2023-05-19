import AccrualBasisStrategy from "./AccrualBasisStrategy";
import CashBasisStrategy from "./CashBasisStrategy";

export default class InvoiceGenerationFactory {

	static create (type: string) {
		if (type === "cash") {
			return new CashBasisStrategy();
		}
		if (type === "accrual") {
			return new AccrualBasisStrategy();
		}
		throw new Error("Invalid type");
	}
}