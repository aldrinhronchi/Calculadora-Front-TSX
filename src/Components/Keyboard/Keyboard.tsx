import "./Keyboard.css";

const buttons = [
	["", "", "", "%", "MU"],
	["MC", "MR", "M-", "M+", "÷"],
	["±", "7", "8", "9", "×"],
	[">", "4", "5", "6", "-"],
	["C/AC", "1", "2", "3", "+"],
	["0", "00", ".", "="],
];

const Keyboard = ({ onButtonClick }: { onButtonClick: (value: string) => void }) => {
	return (
		<div className="keyboard">
			{buttons.map((row, rowIndex) => (
				<div key={rowIndex} className="keyboard-row">
					{row.map(label => {
						const isNumber = !Number.isNaN(parseFloat(label));

						if (label === "") return <div className="keyboard-spacer" key={Math.random()}></div>;

						return (
							<button
								key={label}
								className={`keyboard-button ${
									label === "+" ? "larger" : label === "C/AC" ? "orange" : isNumber ? "dark" : ""
								}`}
								onClick={() => onButtonClick(label)}
							>
								{label}
							</button>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default Keyboard;
