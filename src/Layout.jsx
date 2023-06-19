// import React from 'react'
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"

const Layout = () => {
  return (
    <Provider store={store}>
        <Navbar/>
        <main>
            <Outlet/> 
        </main>
    </Provider>
  )
}

export default Layout
