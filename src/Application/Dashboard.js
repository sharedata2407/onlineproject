import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';
import './Dashboard.css';
import Restore from './Pages/Restore_Archieve';
import Node_options from './Pages/Build_Nodes';

class Dashboard extends Component{
    render(){

        return(
            
<div className="row">


<TopBar/>
    <div className="column1">
    <SideBar/>
    </div>
    <div className="column2">
    <Switch>
    <Route path='/Restore_Archive_Reports' component={Restore}/>
    <Route path='/Build_Node' component={Node_options}/>
    <Route path='/Test'>Hi</Route>
    <Route path='/' exact >hello</Route>
    </Switch>
    </div>

   

   
    
</div>
        );
    }
}


export default Dashboard;