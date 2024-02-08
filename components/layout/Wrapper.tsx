import React from 'react'
const Header = dynamic(import('./Header'),{ssr : false})
import Footer from './Footer'
import dynamic from 'next/dynamic'

interface Wrapper {
    children : JSX.Element | JSX.Element[] | null | undefined
}

const Wrapper = ({children} : Wrapper) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Wrapper
