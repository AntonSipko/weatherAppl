import { useEffect } from "react"
import { BrowserRouter, NavLink, Outlet, Routes, useNavigate } from "react-router-dom"
import './navigators.css'
type Props = {
    navigatorArr: string[]

}

export const Navigators: React.FC<Props> = ({ navigatorArr }) => {
    const navigate = useNavigate();
      useEffect(() => {
        navigate('/');
      },[BrowserRouter] );
 

    return <div>
        <nav>
            <ul className="navigator-list">
                {navigatorsBuild()}

            </ul>
        </nav>
        <Outlet />
    </div>

    function navigatorsBuild() {
        return navigatorArr.map((nav => {
            if (nav != "Home") {
                return <li className="navigator-item">
                    <NavLink to={nav}>{nav}</NavLink>
                </li>
            } else {
                return <li className="navigator-item">
                    <NavLink to="/">{nav}</NavLink>
                </li>
            }
        }))


    }
}
