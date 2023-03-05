import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.header`
	box-shadow: 0px 15px 20px -20px #111;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 80px;
	margin: 0 auto;
	padding: 0 15px;
	max-width: 1270px;
`;

export const Logo = styled.div`
	text-transform: uppercase;
	font-weight: 700;
	font-size: 35px;
	color: var(--accent);
`;

export const List = styled.ul`
	display: flex;
	column-gap: 50px;
`;

export const StyledLink = styled(NavLink)`
	font-size: 18px;
	font-weight: 600;
	transition: color var(--anim);

	&.active {
    color: var(--accent);
  	}

	&:hover {
		color: var(--accent);
	}
`;