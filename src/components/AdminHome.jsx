import React, { Component } from 'react';

class AdminHome extends Component {
    render() {
        return (
            <div>
                <table class="menu">
                    <tr>
                    <td><a href="/Customer" className="btn btn-primary">Customer</a></td>
                    <td><a href="/User" className="btn btn-primary">User</a></td>
                    <td><a href="/Booking" className="btn btn-primary">Booking</a></td>
                    <td><a href="/Activity"clsssName="btn-primary">Activity</a></td>
                    <td><a href="/" className="btn btn-primary">Back to Home</a></td>
                    </tr>
                    </table>
                    <center>
					<h2> WELCOME TO Amusement</h2>
	</center>
            </div>
        );
    }
}

export default AdminHome;