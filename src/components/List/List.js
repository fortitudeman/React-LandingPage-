import styled from 'styled-components';

const List = styled.ul`
	max-width: ${(props) => props.max};
	list-style-type: none;
	text-align:center;
	padding: 0;
`;

export default List;
