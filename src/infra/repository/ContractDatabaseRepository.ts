import AccrualBasisStrategy from "../../domain/AccrualBasisStrategy";
import Contract from "../../domain/Contract";
import ContractRepository from "../../application/repository/ContractRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import Payment from "../../domain/Payment";

export default class ContractDatabaseRepository implements ContractRepository {

	constructor (readonly connection: DatabaseConnection) {
	}

	async list(): Promise<Contract[]> {
		const contracts: Contract[] = [];
		const contractsData = await this.connection.query("select * from branas.contract", []);
		for (const contractData of contractsData) {
			const contract = new Contract(contractData.id_contract, contractData.description, parseFloat(contractData.amount), contractData.periods, contractData.date);
			const paymentsData = await this.connection.query("select * from branas.payment where id_contract = $1", [contract.idContract]);
			for (const paymentData of paymentsData) {
				contract.addPayment(new Payment(paymentData.id_payment, paymentData.date, parseFloat(paymentData.amount)));
			}
			contracts.push(contract);
		}
		return contracts;
	}

}