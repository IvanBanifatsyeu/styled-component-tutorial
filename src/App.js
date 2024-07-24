import "./App.css";
import logo from './logo.svg'
import StyledButton, { FancyButton, SubmitButton, AnimatedLogo } from "./components/Button";

function App() {
	return (
		<div>
			{/* <img src={logo} className="App-logo" alt="logo"/> */}
			<AnimatedLogo src={logo} alt="logo"/>
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
