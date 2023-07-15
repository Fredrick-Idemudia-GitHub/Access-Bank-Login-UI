import React from 'react'
import Navbar from './index/Navbar'
import Header from './index/Header'
import MainBody from "./index/MainBody";
import Footer from "./index/Footer";

export default function Home() {
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
