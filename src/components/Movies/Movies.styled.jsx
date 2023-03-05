import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	column-gap: 20px;
	row-gap: 40px;
`;

export const Item = styled.li`
	width: 232px;
	flex-basis: calc((100% - 20px * (5 - 1)) / 5);
`;

export const ImageBox = styled.div`
	height: 350px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
`;

export const TitleMovie = styled.h2`
	font-weight: 600;
	margin-top: 8px;
	line-height: 1.5;
	padding-right: 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;