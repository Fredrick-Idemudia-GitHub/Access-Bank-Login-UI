import React from 'react'
import Navbar from './github/Navbar'
import Header from './github/Header'
import MainBody from "./github/MainBody";
import Footer from "./github/Footer";

export default function Github() {
  return (
    <>
        <div className="container-main">
            <Navbar />
            <Header />
            <MainBody />
            <Footer />
        </div>
    </>
  )
}
