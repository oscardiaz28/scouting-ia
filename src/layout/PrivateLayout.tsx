import { Outlet } from "react-router-dom"
import { Sidebar } from "../pages/dashboard/components/Sidebar"
import { useState } from "react"
import { DashboardHeader } from "../pages/dashboard/components/DashboardHeader"

export const PrivateLayout = () => {

  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="bg-[#111311] w-full flex h-screen">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
        />
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar">
          <DashboardHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <main className="bg-[#111311]">
            <div className="px-8 pt-3 pb-8">
              {<Outlet />}
            </div>
          </main>
        </div>
        
      </div>
    </div>
  )
}
