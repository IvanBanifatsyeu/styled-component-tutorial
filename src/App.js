import "./App.css";
import StyledButton, { FancyButton } from "./components/Button";

function App() {
	return (
		<div>
			<StyledButton>Styled button</StyledButton>
			<div>
				<br />
			</div>
			<StyledButton variant="outline">Styled button</StyledButton>
			<div>
				<br />
			</div>
			<FancyButton as="a">Fancy Button</FancyButton>
		</div>
	);
}

export default App;
