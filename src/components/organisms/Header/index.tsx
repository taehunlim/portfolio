import React from 'react';
import { Link } from 'react-router-dom';

import styledComponent from './style';

const { Navigation, ListItem } = styledComponent;

function Header() {
   return (
      <Navigation>
         <ul>
            <ListItem isActive={true}>
               <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
               <Link to="/about">ABOUT ME</Link>
            </ListItem>
         </ul>
      </Navigation>
   );
}

export default Header;
