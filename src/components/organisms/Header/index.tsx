import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface ListItemProps {
   isActive?: boolean;
}

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

const Navigation = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   min-width: 20rem;
   z-index: 999;
   background-color: #090a0f;
   text-align: center;
   box-shadow: 0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%);

   ul {
      padding: 0;
   }
`;

const ListItem = styled.li<ListItemProps>`
   display: inline-block;

   a {
      color: #73cca8;
      border-bottom: ${({ isActive }) =>
         isActive ? '4px solid #1b2735' : 'none'};
      height: 3rem;
      padding: 0 1rem;
      color: #dbe8d4;
      line-height: 3em;
      text-decoration: none;
      cursor: pointer;
   }
`;

export default Header;
