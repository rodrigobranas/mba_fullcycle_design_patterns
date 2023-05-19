import axios from "axios";

test("Deve gerar as faturas pela api", async function () {
	const input = {
		month: 1,
		year: 2022,
		type: "cash"
	}
	const response = await axios.post("http://localhost:3000/generate_invoices", input);
	const output = response.data;
	expect(output.at(0)?.date).toBe("2022-01-05T13:00:00.000Z");
	expect(output.at(0)?.amount).toBe(6000);
});
