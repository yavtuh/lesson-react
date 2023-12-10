import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default MainLayout