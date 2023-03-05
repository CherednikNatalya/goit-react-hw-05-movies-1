import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import { IMAGE_URL } from "constans/ImageURL";
import imageReplace from "images/poster-not-found.jpg";

import { ImageBox, Item, List, TitleMovie } from "./Movies.styled";

export const Movies = ({ movies }) => {
	const location = useLocation();

	return (
		<List>
			{movies.map(({ id, img, title }) => (
				<Item key={id}>
					<Link to={`movies/${id}`} state={{ from: location }}>
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
	);
};

Movies.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			img: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};