import React from 'react';
import { NavLink } from 'react-router-dom';
 import './Sidebar_item.css';


const SideBar_Item =(props)=>{
   
        return(
<div >
<li>  <NavLink to={props.link} className="Ul" exact activeClassName="active">{props.children}</NavLink>
</li>
    
    
   
</div>
        );
    
}


export default SideBar_Item;