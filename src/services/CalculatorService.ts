import { create, all } from "mathjs";

class CalculatorService {
	private currentValue: string = "0";
	private math = create(all);

	getCurrentValue(): string {
		return this.currentValue;
	}

	processInput(input: string): void {
		const operators = ["+", "-", "×", "÷"];
		const lastChar = this.currentValue[this.currentValue.length - 1];

		if (input === "C/AC") {
			this.currentValue = "0";
			return;
		}

		if (input === "=") {
			this.currentValue = this.calculateResult();
			return;
		}

		if (input === "±") {
			this.toggleSign();
			return;
		}

		if (operators.includes(input)) {
			if (operators.includes(lastChar)) {
				this.currentValue = this.currentValue.slice(0, -1) + input;
			} else {
				this.currentValue += input;
			}
			return;
		}

		if (this.currentValue === "0" && input !== ".") {
			this.currentValue = input;
		} else {
			this.currentValue += input;
		}
	}

	private toggleSign(): void {
		if (this.currentValue === "0") return;

		const operators = ["+", "×", "÷"];
		let lastOperatorIndex = -1;

		for (let i = this.currentValue.length - 1; i >= 0; i--) {
			if (operators.includes(this.currentValue[i])) {
				lastOperatorIndex = i;
				break;
			}
		}

		let numberToInvert = this.currentValue.slice(lastOperatorIndex + 1);

		if (numberToInvert.startsWith("-")) {
			numberToInvert = numberToInvert.slice(1);
		} else {
			numberToInvert = "-" + numberToInvert;
		}

		this.currentValue = this.currentValue.slice(0, lastOperatorIndex + 1) + numberToInvert;
	}
	private calculateResult(): string {
		try {
			const sanitizedExpression = this.currentValue.split("×").join("*").split("÷").join("/");

			const result = this.math.evaluate(sanitizedExpression);
			return String(result);
		} catch {
			return "Erro";
		}
	}
}

export default new CalculatorService();
