import "./App.css";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button";

function App() {
	return (
		<div>
			<StyledButton type="submit">Styled button</StyledButton>
			<div>
				<br />
			</div>
			<StyledButton variant="outline">Styled button</StyledButton>
			<div>
				<br />
			</div>
			<FancyButton as="a">Fancy Button</FancyButton>
			<div>
				<br />
			</div>
			<SubmitButton>Submit</SubmitButton>
		</div>
	);
}

export default App;
