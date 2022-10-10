import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
               
                <body>
                    <div class="login-box">
                    <h1>Login</h1>
                    <h4>Welcome to Amusement</h4>
                    <form action="/CustomerHome" >
                       
                        <label>Username</label>
                        <input type="username" placeholder=""/>
                        <label>Password</label>
                        <input type="password" placeholder="" />
    
                        <input onclick="window.location.href = '/CustomerHome';" type="submit" value="Submit" />
                       
                        
                    </form>
                    
                    </div>
                    <p class="para-2">
                    Not have an account? <a href="SignUp">Sign Up here</a>
                    </p>
                </body>
            </div>
        );
    }
}

export default Login;