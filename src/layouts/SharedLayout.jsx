import React from 'react'
import { Outlet } from 'react-router'
import MainLayout from './MainLayout'
import TopBar from '../component/TopBar'

export default function SharedLayout(){
  return (
    <MainLayout>
      <div className="w-[375px] max-w-full h-[812px] rounded-3xl shadow-lg overflow-hidden flex flex-col theme-card">
        <TopBar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  )
}
