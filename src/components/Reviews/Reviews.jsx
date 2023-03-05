import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchReviewsById } from "services/moviesApi";
import { STATUS } from "constans/Status";

import { Loading, NotFound } from "components/Common/Common.styled";
import { List, Name, Text } from "./Reviews.styled";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [status, setStatus] = useState(STATUS.idle);

	const { movieId } = useParams();

	useEffect(() => {
		const getReviews = async query => {
			setStatus(STATUS.loading);
			try {
				const data = await fetchReviewsById(query);
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus(STATUS.error);
			}
		};
		getReviews(movieId);
	}, [movieId]);

	const onResolve = data => {
		const dataReviews = data.map(({ id, author, content }) => ({
			id,
			author,
			content,
		}));
		setReviews(dataReviews);
		setStatus(STATUS.success);
	};

	return (
		<>
			{status === STATUS.error && <NotFound>NOT FOUND</NotFound>}
			{status === STATUS.loading && <Loading>Loading...</Loading>}
			{status === STATUS.success && reviews.length === 0 ? (
				<p>We don`t have any reviews for this movie</p>
			) : (
				<List>
					{reviews.map(({ id, author, content }) => (
						<li key={id}>
							<Name>{author}</Name>
							<Text>{content}</Text>
						</li>
					))}
				</List>
			)}
		</>
	);
};

export default Reviews;