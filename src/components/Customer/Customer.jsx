import React, { Component } from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


class Customer extends Component {
    render() {
        return (
            <div>
                <body>
                
                <table class="menu">
                    <tr>
                        <td><a href="/AdminHome" className="btn btn-primary">Home</a></td>
                        <td><a href="/AddCustomer" className="btn btn-primary">Add Customer</a></td>
                        <td><a href="/ViewCustomer" className="btn btn-primary">View Customer</a></td>
                        
                        
                       
                    </tr>
                </table>    
                </body>
             
            </div>
        );
    }
}

export default Customer;