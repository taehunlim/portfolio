import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import styledComponent from './style';

const { Navigation, ListItem } = styledComponent;

function Header() {
   const location = useLocation();

   return (
      <Navigation>
         <ul>
            <ListItem isActive={location.pathname === '/'}>
               <Link to="/">Home</Link>
            </ListItem>
            <ListItem isActive={location.pathname === '/about'}>
               <Link to="/about">ABOUT ME</Link>
            </ListItem>
         </ul>
      </Navigation>
   );
}

export default Header;
