import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const Layout:React.FC = ({children}) =>{
  return (
    <article>
      <Header/>
      {children}
      <Footer/>
    </article>
  )
}

export default Layout
