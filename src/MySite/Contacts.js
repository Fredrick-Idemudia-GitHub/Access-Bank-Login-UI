import React from 'react'
import Navbar from './contacts/Navbar'
import Header from './contacts/Header'
import MainBody from "./contacts/MainBody";
import Footer from "./contacts/Footer";

export default function Contacts() {
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
