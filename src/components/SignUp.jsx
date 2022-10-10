import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div>
                <body>
                    <div class="signup-box">
                    <h2>SIGN UP</h2>
                    <h4>It's free and only takes a minute</h4>
                    <form action="/NewLogin" >
                       
                        <label>Name</label>
                        <input type="Name" placeholder="Enter your Name" required />
                        <label>Email-Id</label>
                        <input type="Email-Id" placeholder="Enter your Email-Id" required/>
                        <label>Mobile</label>
                        <input type="Mobile" placeholder="Enter Mobile number" required />
                        <label>Create Password</label>
                        <input type="Password" placeholder="Enter Password" required />
                        
                        <input onclick="window.location.href = '/NewLogin';" type="submit" value="Submit" />
                       
                        
                    </form>
                    
                    </div>
                    <p class="para-3">
                    Already have an account? <a href="NewLogin">Login here</a>
                    </p>
                </body>
            </div>
        );
    }
}

export default SignUp;