import React from 'react';
import './Pages.css';


const Build_Nodes =()=>{
   
        return(
<div >
<h3>
    Node Options
</h3>
<select>
    <option>Build Node</option>
    <option>Intel Cluster Node</option>
    <option>Midrange</option>
    <option>Midrange(No Sched)</option>
    <option>Midrange Cluster</option>
    <option>Midrange Cluster(No Sched)</option>
</select>
<br/>
<button className="button">Submit</button>

    
    <h4>Build Node Intel Cluster Node Midrange Midrange(No Sched) Midrange Cluster Midrange Cluster(No Sched)</h4>
    
   
</div>
        );
    
}


export default Build_Nodes;