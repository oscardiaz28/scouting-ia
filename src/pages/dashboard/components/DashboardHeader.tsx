import { ArrowRight, Bell, Menu, Search } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import { useSidebarState } from '../../../context/SidebarProvider'

export const DashboardHeader = ( {showSidebar, setShowSidebar} : {
    showSidebar: boolean, setShowSidebar: Dispatch<SetStateAction<boolean>>
} ) => {

    const {setShowMenu} = useSidebarState()

    return (
        <div className="flex items-center justify-between px-8 h-[70px]">
            <div className="flex items-center gap-2">

                <div onClick={() => setShowSidebar(prev => !prev)}
                    className="hidden md:block cursor-pointer transition-transform duration-300" >
                    <ArrowRight className={`transform transition-transform duration-300 ${showSidebar ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <Menu onClick={ () => setShowMenu(true) } className="cursor-pointer md:hidden" />
                <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>

            <div className="flex items-center gap-6">
                <button className="bg-blue-600 p-2 rounded-full px-4 text-sm font-semibold cursor-pointer">Buy & Sell</button>
                <Search className="cursor-pointer" />
                <Bell className="cursor-pointer" />
                <button className="w-9 h-9 bg-[#474747] rounded-full flex items-center justify-center cursor-pointer">
                    <p>S</p>
                </button>
            </div>
        </div>
    )
}
