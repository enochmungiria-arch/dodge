import { NavLink } from "react-router";


function Navigation(){
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
    
      <NavLink to="/"
      style={({ isActive})=>{{
        color: isActive? "red" :"black"

      }}} >
        Home
      </NavLink>
      <NavLink to="/about" 
      style={({ isActive})=>{{
        color: isActive? "red" :"black"

      }}} >
        About
      </NavLink>
      <NavLink to="/crazy/route/23333"
      style={({ isActive})=>{{
        color: isActive? "red" :"black"

      }}} 
    >
    CrazyRoute
    </NavLink>
    </div>
  );
}
export default Navigation;
