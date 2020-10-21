import React,{Component} from 'react';

class Login extends Component{
    render(){
        return(
<div className="App">
      <label>Please enter the credentials</label> <br/>
      <input type="text" placeholder="Username"></input><br/><input type="text" placeholder="Password"></input><br/>
      <button>Login</button>
      
    </div>
        );
    }
}


export default Login;