import React from 'react'
import Navbar from './resume/Navbar'
import Header from './resume/Header'
import MainBody from "./resume/MainBody";
import Footer from "./resume/Footer";

export default function Resume() {
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
