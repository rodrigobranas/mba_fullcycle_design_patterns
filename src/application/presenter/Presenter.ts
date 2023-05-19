import { Output } from "../usecase/GenerateInvoices";

export default interface Presenter {
	present (output: Output[]): any;
}
