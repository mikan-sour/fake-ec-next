import React from 'react';
import Search from '../search';

const Styles:React.CSSProperties = {
    width:'100vw',
    position: 'sticky',
    top:0,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'3.5rem',
    backgroundColor:'purple',
    zIndex:2,
}

export default function Header() {
  return (
        <header style={Styles}>
          <Search></Search>
        </header>
  )
}
