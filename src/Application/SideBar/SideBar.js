import React,{Component} from 'react';

import SideBar_item from './Sidebar_Items/Sidebar_item';


import './Sidebar.css';

class SideBar extends Component{
    render(){
        return(
<div className="vertical-menu">
    
    
    <ul>
        <SideBar_item  link ="/Restore_Archive_Reports">Restore/Archive Reports</SideBar_item>
        <SideBar_item link ="/Export_Node">Export Node</SideBar_item>
        <SideBar_item link ="/Export_Archive">Export Archive</SideBar_item>
        <SideBar_item link ="/Logs_Server">Logs Server</SideBar_item>
        <SideBar_item link ="/Backup_Information">Backup Information</SideBar_item>
        <SideBar_item link ="/Disassoiate_Associate">Disassoiate Associate</SideBar_item>
        <SideBar_item link ="/Rebuild_Rename_Node">Rebuild/Rename Node</SideBar_item>
        <SideBar_item  link ="/Delete_Individual_Filespace">Delete Individual Filespace</SideBar_item>
        <SideBar_item link ="/Change_Domain_Exception_List">Change Domain Exception List</SideBar_item>
        <SideBar_item link ="/Centera_Location">Centera Location Centera Shuffle Hex to ASCII</SideBar_item>
        <SideBar_item link ="/Daily_Report">Daily Report Daily VE Report</SideBar_item>
        <SideBar_item link ="/Build_Node">Node Options</SideBar_item>
        <SideBar_item link ="/Command_Line">Command Line</SideBar_item>
        <SideBar_item link ="/TSM_Restore">TSM Restore TSM VE Proxy TSM VE Restore</SideBar_item>
    </ul>

   
</div>
        );
    }
}


export default SideBar;