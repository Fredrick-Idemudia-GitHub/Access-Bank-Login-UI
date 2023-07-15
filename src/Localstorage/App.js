import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './BankApp.css'

export default function App() {
  return (
    <div className='bank-app-container'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
