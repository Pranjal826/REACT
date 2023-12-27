import { Link ,NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav >
            <NavLink to='/' style={(e)=>{return{color:e.isActive?"green":"",fontWeight:e.isActive?"300":""}}}> Home</NavLink>
            <NavLink to='/create' style={(e)=>{return{color:e.isActive?"yellow":"",fontWeight:e.isActive?"300":""}}}   >create </NavLink>
            <NavLink to='/show'>show </NavLink>
           
        </nav>
    );
};

export default Nav;
