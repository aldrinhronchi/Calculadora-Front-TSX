import { useState } from "react";
import Screen from "../../Components/Screen/Screen";
import Keyboard from "../../Components/Keyboard/Keyboard";
import "./Calculator.css";
import CalculatorService from "../../services/CalculatorService";

const Calculator = () => {
	const [displayValue, setDisplayValue] = useState("0");

	const handleButtonClick = (value: string) => {
		// Passa o valor para o service e atualiza o estado
		CalculatorService.processInput(value);
		setDisplayValue(CalculatorService.getCurrentValue());
	};

	return (
		<div className="base-calculator">
			<div className="calculator-header">
				<strong>Casio</strong>
				<div className="copper-block">&nbsp;</div>
				<div className="model">
					<span className="side-text">MX-120B</span>
					<div className="digits">
						<span className="top-text">12</span>
						<span className="bottom-text">Digits</span>
					</div>
				</div>
			</div>

			<div className="calculator-screen">
				<Screen value={displayValue} />
			</div>

			<div className="calculator-keyboard">
				<Keyboard onButtonClick={handleButtonClick} />
			</div>
		</div>
	);
};

export default Calculator;
