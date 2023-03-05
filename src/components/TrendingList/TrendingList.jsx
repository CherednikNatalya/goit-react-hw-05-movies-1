// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { List, Item, LinkItem } from '../TrendingList/TrendingList.styled';
import React from 'react';

const TrendingList =({treadingList}) => {
return(
        <List>
        {treadingList.map(({ id, title, name }) => (
                    <Item key={id}>
                        <LinkItem
                            to={`/movies/${id}`}
                            // state={{ from: location }}
                        >
                            {title || name}
                        </LinkItem>
                    </Item>
                ))}
                </List>
   
)
}
export default TrendingList



