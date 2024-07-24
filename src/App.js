import "./App.css";
import StyledButton from "./components/Button";


function App() {
	return (
		<div>
			
			<StyledButton>Styled button</StyledButton>
			<div><br/></div>
			<StyledButton variant='outline'>Styled button</StyledButton>
		</div>
	);
}

export default App;
