import { useState, useEffect } from "react";

import { fetchTrendingMovies } from "services/moviesApi";
import { STATUS } from "constans/Status";

import { Movies } from "components/Movies/Movies";
import { Loading, NotFound, Section, Title } from "components/Common/Common.styled";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [status, setStatus] = useState(STATUS.idle);

	useEffect(() => {
		const getMovies = async () => {
			setStatus(STATUS.loading);
			try {
				const data = await fetchTrendingMovies();
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus(STATUS.error);
			}
		};
		getMovies();
	}, []);

	const onResolve = data => {
		const movie = data.map(({ id, poster_path, original_title }) => ({
			id,
			img: poster_path,
			title: original_title,
		}));
		setMovies(movie);
		setStatus(STATUS.success);
	}

	return (
		<Section>
			{status === STATUS.error && <NotFound>NOT FOUND</NotFound>}
			{status === STATUS.loading && (
				<>
					<Title>Trending today</Title>
					<Loading>Loading...</Loading>
				</>
			)}
			{status === STATUS.success && (
				<>
					<Title>Trending today</Title>
					<Movies movies={movies} />
				</>
			)}
		</Section>
	);
};

export default HomePage;