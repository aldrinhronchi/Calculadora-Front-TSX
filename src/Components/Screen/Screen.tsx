type ScreenProps = {
	value: string;
};
import "./Screen.css";
const Screen = ({ value }: ScreenProps) => {
	return <div className="screen">{value}</div>;
};

export default Screen;
