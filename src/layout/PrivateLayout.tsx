import { Outlet } from "react-router-dom"

export const PrivateLayout = () => {
  return (
    <div>
      {<Outlet />}
    </div>
  )
}
