import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCastById } from "services/moviesApi";
import { STATUS } from "constans/Status";
import { IMAGE_URL } from "constans/ImageURL";
import imageReplace from "images/poster-not-found.jpg";

import { Loading, NotFound } from "components/Common/Common.styled";
import { Character, ImgBox, Item, List, Name } from "./Cast.styled";

const Cast = () => {
	const [cast, setCast] = useState([]);
	const [status, setStatus] = useState(STATUS.idle);

	const { movieId } = useParams();

	useEffect(() => {
		const getCast = async query => {
			setStatus(STATUS.loading);
			try {
				const data = await fetchCastById(query);
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus(STATUS.error);
			}
		};
		getCast(movieId);
	}, [movieId]);

	const onResolve = data => {
		const dataCast = data.map(({ cast_id, character, name, profile_path }) => ({
			id: cast_id,
			character,
			name,
			img: profile_path,
		}));

		setCast(dataCast);
		setStatus(STATUS.success);
	};

	return (
		<>
			{status === STATUS.error && <NotFound>NOT FOUND</NotFound>}
			{status === STATUS.loading && <Loading>Loading...</Loading>}
			{status === STATUS.success && cast.length === 0 ? (
				<p>Not information</p>
			) : (
				<List>
					{cast.map(({ id, character, name, img }) => (
						<Item key={id}>
							<ImgBox>
								{img ? (
									<img src={`${IMAGE_URL}` + img} alt={name} width={232} height={350} />
								) : (
									<img src={imageReplace} alt="Plug" width={232} height={350} />
								)}
							</ImgBox>
							<Name>{name}</Name>
							<Character>
								<span>Character:</span> {character}
							</Character>
						</Item>
					))}
				</List>
			)}
		</>
	);
};

export default Cast;