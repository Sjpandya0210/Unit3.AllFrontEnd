import { NavLink } from "react-router-dom";
function Navbar (){

    return (
       <nav>
        <NavLink to = "/playerslist">PlayersList</NavLink>
        {/* <NavLink to = "/addplayer">AddPlayer</NavLink> */}
       </nav>
    );
}

export default Navbar;