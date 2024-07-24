import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) => (props.variant === 'outline' ? '#fff' : "#4caf50")};
	border: 2px solid #4caf50;
	color: ${(props) => (props.variant === 'outline' ? "#4caf50" : "#fff")};
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	cursor: pointer;
	font-size: 16px;
	transition: 0.5s all ease-out;
`;
