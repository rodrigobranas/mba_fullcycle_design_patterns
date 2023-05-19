import Usecase from "../usecase/Usecase";

export default class LoggerDecorator implements Usecase {

	constructor (readonly usecase: Usecase) {
	}

	execute(input: any): Promise<any> {
		console.log(input.userAgent);
		return this.usecase.execute(input);
	}

}