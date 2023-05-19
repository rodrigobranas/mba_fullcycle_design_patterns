import Contract from "../../domain/Contract";

export default interface ContractRepository {
	list (): Promise<Contract[]>;
}
