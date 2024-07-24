import "./App.css";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import StyledButton, {
	FancyButton,
	SubmitButton,
	AnimatedLogo,
	DarkButton,
} from "./components/Button";

const theme = {
	dark: {
		primary: "#000",
		text: "#fff",
	},
	light: {
		primary: "#fff",
		text: "#000",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <img src={logo} className="App-logo" alt="logo"/> */}
			<AnimatedLogo src={logo} alt="logo" />
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
			<div>
				<br />
			</div>
			<DarkButton>Dark</DarkButton>
		</ThemeProvider>
	);
}

export default App;
