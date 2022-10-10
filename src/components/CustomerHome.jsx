import React, { Component } from 'react';

class CustomerHome extends Component {
    render() {
        return (
            <div>
                <table class="menu">
                    <tr>
                    
                    <td><a href="/ViewActivity" className="btn btn-primary">All Actiivties</a></td>
                    <td><a href="/BookActivity" className="btn btn-primary">Book Activity</a></td>
                    
          
                    <td><a href="/" className="btn btn-primary">Back to Home</a></td>
                    </tr>
                    </table>
                    <center>
					<h2> WELCOME TO Amusement Park</h2>
	</center>
            </div>
        );
    }
}

export default CustomerHome;