import React from 'react'
import { userMenu } from '../menu/userMenu'
import { useLocation,Link } from 'react-router-dom'
import '../../style/Layout.css'

const Sidebar = () => {
    const location=useLocation()
  return (
    <>
        <div className="sidebar">
            <div className="menu">
                {
                    userMenu.map((menu)=>{
                        const isActive=location.pathname === menu.path
                        return (
                            <div key={menu.id} className ={ `menu-item ${isActive && 'active'}`}>
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Sidebar