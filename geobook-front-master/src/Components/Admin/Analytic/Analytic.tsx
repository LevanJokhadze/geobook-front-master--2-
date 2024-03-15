import { AnaliticHead } from "./AnaliticHead"
import { SideBar } from "../SideBard/SideBar"
import { Logout } from "../SideBard/Logout"
import { Charty } from "./Charty"


export const Analytic = () => {
  return (
    <>
    <Logout />
    <div className="flex flex-row mb-20">
    <SideBar />

    <div className="flex flex-col w-full items-center justify-center">
    <AnaliticHead />   
    
    <Charty/>
    </div>
    </div>
    </>
  )
}

