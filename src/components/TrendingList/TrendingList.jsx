// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { List, Item, LinkItem } from '../TrendingList/TrendingList.styled';
import React from 'react';
import {Link} from 'react-router-dom'
const TrendingList =({movies}) => {
return(
        // <List>
        // {treadingList.map(({ id,  name }) => (
        //             <Item key={id}>
        //                 {name}
        //                 {/* <LinkItem
        //                     to={`/movies/${id}`}
        //                     // state={{ from: location }}
        //                 >
        //                     {title || name} */}
        //                 {/* </LinkItem> */}
        //             </Item>
        //         ))}
        //         </List>
        

        <ul >
        {movies.map(({ id, title }) => (
          <li key={id} >
            <Link to={`/movies/${id}`} >
              {title}
            </Link>
          </li>
        ))}
        </ul>
)
}
export default TrendingList

