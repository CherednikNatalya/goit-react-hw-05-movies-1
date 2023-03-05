import Notiflix from 'notiflix';
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { fetchSearchMovies } from "services/moviesApi";
import { STATUS } from "constans/Status";

import { IMAGE_URL } from "constans/ImageURL";
import imageReplace from "images/poster-not-found.jpg";

import { Loading, NotFound, Section, Title } from "components/Common/Common.styled";
import { ImageBox, Item, List, TitleMovie } from 'components/Movies/Movies.styled';
import { Btn, Form, Input } from "./MoviesPage.styled";

Notiflix.Notify.init({
	width: '400px',
	fontSize: '15px',
});

const MoviesPage = () => {
	const [status, setStatus] = useState(STATUS.idle);
	const [searchParams, setSearchParams] = useSearchParams();
	const [movies, setMovies] = useState([]);

	const searchName = searchParams.get('query');
	const location = useLocation();

	const handleSubmit = e => {
		e.preventDefault();
		const { value } = e.target.elements.search;
		if (value === '') {
			Notiflix.Notify.info('Please, fill in the search field!');
		}
		setMovies([]);
		setSearchParams({ query: value });
	};

	useEffect(() => {
		if (!searchName) return;
		if (searchName === '') return;
		const getMovies = async () => {
			setStatus(STATUS.loading);
			try {
				const data = await fetchSearchMovies(searchName);
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus(STATUS.error);
			}
		};
		getMovies();
	}, [searchName]);

	const onResolve = data => {
		if (data.length === 0) {
			Notiflix.Notify.failure(
				'Sorry, there are no images matching your search query. Please try again.'
			);
			setStatus(STATUS.idle);
			return;
		}
		const movie = data.map(({ id, poster_path, original_title }) => ({
			id,
			img: poster_path,
			title: original_title,
		}));
		setMovies(movie);
		setStatus(STATUS.success);
	};

	return (
		<Section>
			<Form onSubmit={handleSubmit}>
				<Input type="text" name="search" placeholder="Enter movie name" autoComplete="off" />
				<Btn type="submit">Search</Btn>
			</Form>
			{status === STATUS.error && <NotFound>NOT FOUND</NotFound>}
			{status === STATUS.loading && (
				<>
					<Title>Search results</Title>
					<Loading>Loading...</Loading>
				</>
			)}
			{status === STATUS.success && (
				<>
					<Title>Search results</Title>
					<List>
						{movies &&
							movies.map(({ id, img, title }) => (
								<Item key={id}>
									<Link to={`${id}`} state={{ from: location }}>
										<ImageBox>
											{img ? (
												<img src={`${IMAGE_URL}` + img} alt={title} width={232} height={350} />
											) : (
												<img src={imageReplace} alt="Plug" width={232} height={350} />
											)}
										</ImageBox>
										<TitleMovie>{title}</TitleMovie>
									</Link>
								</Item>
							))}
					</List>
				</>
			)}
		</Section>
	);
};

export default MoviesPage;