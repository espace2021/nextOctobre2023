'use client';
import Link from "next/link";
import {useSession, signOut,signIn} from 'next-auth/react';

const AppBar = () => {
    const {data} =useSession();

return (
<nav className="navbar navbar-expand-lg bg-light">   
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <Link className="nav-link" href={"/"}>Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" href={"/products"}>Proudcts</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" href={"/shoppingSpace"} > Espace shopping  </Link>
   </li> 
   <li className="nav-item">
   {data ?  ( <>
      
    <button className="btn btn-default"  onClick={() => {signOut();}}>Logout </button>
  
  
            </>
            ):  null
            }

    </li> 
</ul>
</nav>
);
};
export default AppBar;
