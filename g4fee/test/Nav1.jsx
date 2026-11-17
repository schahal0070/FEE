import { IoMdLogOut } from "react-icons/io";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { toast } from "react-toastify";

export function Nav1() {
    const user = useAuthStore((state) => state.userName);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    function handleClick(){
        logout();
        toast.success;
        
        toast.sucscess("Logged Out Successfully");
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }
    return (
        
        <div>
            <div className="bh5 fxc jsb p2">
                <div className="fsl ">&#9812;</div>
                <div>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
                <div className="fxc">
                    <div>{user}</div>
                    <button onClick={handleClick} className = "btn4 bg70 fsm fyc">
                        <IoMdLogOut/>
                    </button>
                </div>
            </div>
        </div>
    )
}