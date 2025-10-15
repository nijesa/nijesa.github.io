import React from 'react'
import { Outlet } from 'react-router'
import ResponsiveLayout from './ResponsiveLayout'
import TopBar from '../component/TopBar'

export default function SharedLayout(){
  return (
    <ResponsiveLayout showHeroDesktop={false}>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </ResponsiveLayout>
  )
}
