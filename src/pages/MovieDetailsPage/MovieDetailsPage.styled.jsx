import styled from 'styled-components';

export const Btn = styled.button`
	padding: 5px 10px;
	border-radius: 7px;
	font-size: 12px;
	background-color: var(--secondary);
	color: #fff;
	border: 1px solid var(--lightGray);
	transition: all var(--anim);
	margin-bottom: 20px;

	&:hover {
		background-color: var(--lightGray);
		color: var(--primary);
		border-color: var(--secondary);
	}
`;

export const Inner = styled.div`
	display: flex;
	column-gap: 60px;
	max-width: 800px;
	margin-bottom: 40px;
`;

export const ImgBox = styled.div`
	flex: 30%;

	img {
		width: 100%;
		border-radius: 5px;
	}
`;

export const Content = styled.div`
	flex: 60%;
`;

export const Title = styled.h2`
	font-weight: 600;
	line-height: 1.2;
	font-size: 30px;
	margin-bottom: 30px;
`;

export const List = styled.ul`
	margin-bottom: 40px;
`;

export const Item = styled.li`
	display: flex;
	align-items: center;
	column-gap: 50px;
	font-size: 15px;

	&:not(:last-child) {
			margin-bottom: 10px;
	}
`;

export const Name = styled.p`
	min-width: 100px;
	color: var(--gray);
`;

export const Value = styled.p`
	span {
		display: inline-block;
		text-align: center;
		border-radius: 8px;
		line-height: 1.2;
		width: 50px;
		border: 2px solid var(--secondary);
	}
`;

export const Overview = styled.b`
	display: block;
	font-size: 18px;
	margin-bottom: 15px;
`;

export const Text = styled.p`
	font-size: 15px;
	line-height: 1.3;
`;

export const BtnList = styled.ul`
	display: flex;
	align-items: center;
	column-gap: 30px;
	margin-bottom: 60px;
`;