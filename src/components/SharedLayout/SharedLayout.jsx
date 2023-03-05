import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/Header/Header";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {

	return (
		<>
			<Header />
			<main>
				<Container>
					<Suspense fallback={null}>
						<Outlet />
					</Suspense>
				</Container>
			</main>
		</>
	);
};