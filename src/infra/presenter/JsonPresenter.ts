import { Output } from "../../application/usecase/GenerateInvoices";
import Presenter from "../../application/presenter/Presenter";

export default class JsonPresenter implements Presenter {

	present(output: Output[]): any {
		return output;
	}

}
