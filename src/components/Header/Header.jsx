import { Link } from "react-router-dom";

import { StyledLink, List, Logo, Main, Container } from "./Header.styled";

export const Header = () => {

	return (
		<Main>
			<Container>
				<Logo>
					<Link to="/">Mova</Link>
				</Logo>
				<nav>
					<List>
						<li><StyledLink to="/">Home</StyledLink></li>
						<li><StyledLink to="/movies">Movies</StyledLink></li>
					</List>
				</nav>
			</Container>
		</Main>
	);
};