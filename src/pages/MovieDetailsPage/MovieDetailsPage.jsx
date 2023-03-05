import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import { fetchMovieDetailsById } from "services/moviesApi";
import { STATUS } from "constans/Status";
import { IMAGE_URL } from "constans/ImageURL";
import imageReplace from "images/poster-not-found.jpg";

import { Loading, NotFound, Section } from "components/Common/Common.styled";
import { Btn, Content, ImgBox, Inner, Item, List, Name, Value, Overview, Text, Title, BtnList } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const [status, setStatus] = useState(STATUS.idle);

	const navigate = useNavigate();
	const location = useLocation();
	const { movieId } = useParams();

	useEffect(() => {
		const getMovie = async query => {
			setStatus(STATUS.loading);
			try {
				const data = await fetchMovieDetailsById(query);
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus(STATUS.error);
			}
		};
		getMovie(movieId);
	}, [movieId]);

	const onResolve = data => {
		const dataMovie = {
			title: data.original_title,
			releaseDate: new Date(data.release_date).getFullYear(),
			overview: data.overview,
			genres: data.genres.map(item => item.name + ', ').join(' ').slice(0, -2),
			poster: data.poster_path,
			voteAverage: (data.vote_average * 10).toFixed(0),
		};
		setMovie(dataMovie);
		setStatus(STATUS.success);
	};

	return (
		<Section>
			{status === STATUS.error && <NotFound>NOT FOUND</NotFound>}
			{status === STATUS.loading && <Loading>Loading...</Loading>}
			{status === STATUS.success && movie && (
				<>
					<Btn type="button" onClick={() => navigate(location?.state?.from)}>Go back</Btn>
					<Inner>
						<ImgBox>
							{movie.poster ? (
								<img src={`${IMAGE_URL}` + movie.poster} alt={movie.title} width={250} height={375} />
							) : (
								<img src={imageReplace} alt="Plug" width={250} height={375} />
							)}
						</ImgBox>
						<Content>
							{movie.releaseDate ? (
								<Title>
									{movie.title} ({movie.releaseDate})
								</Title>
							) : (
								<Title>{movie.title}</Title>
							)}
							<List>
								<Item>
									<Name>User score</Name>
									<Value>
										<span>{movie.voteAverage}%</span>
									</Value>
								</Item>
								<Item>
									<Name>Genres</Name>
									{movie.genres ? <Value>{movie.genres}</Value> : <Value>Not information</Value>}
								</Item>
							</List>
							<Overview>Overview</Overview>
							{movie.overview ? <Text>{movie.overview}</Text> : <Text>Not information</Text>}
						</Content>
					</Inner>
					<BtnList>
						<li>
							<Link to="cast" state={location.state} className="link">
								Cast
							</Link>
						</li>
						<li>
							<Link to="reviews" state={location.state} className="link">
								Reviews
							</Link>
						</li>
					</BtnList>
					<Suspense fallback={<Loading>Loading...</Loading>}>
						<Outlet />
					</Suspense>
				</>
			)}
		</Section>
	);
};

export default MovieDetailsPage;