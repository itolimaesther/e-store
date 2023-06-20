// import React from 'react'
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./store/store"
import store from "./store/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar/>
        <main>
            <Outlet/> 
        </main>
      </PersistGate>
    </Provider>
  )
}

export default Layout
