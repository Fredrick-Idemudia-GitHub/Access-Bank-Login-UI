import React from 'react'
import Navbar from './pageNotFound/Navbar'
import Header from './pageNotFound/Header'
import MainBody from "./pageNotFound/MainBody";
import Footer from "./pageNotFound/Footer";

export default function PageNotFound() {
  return (
    <>
        <div className=" myContainer container-fluid">
            <Navbar />
            <Header />
            <MainBody />
            <Footer />
        </div>
    </>
  )
}
