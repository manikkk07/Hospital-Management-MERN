import React from 'react'
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
  <>
  <Header />
  <main>
    <h1></h1>
      <Routers />
  </main>
  <Footer />
   </>
  );
}; 

export default Layout
