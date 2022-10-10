import React, { Component } from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


class ListOfActivity extends Component {
    render() {
        return (
            <div>
                <body>
                
                <table class="menu">
                    <tr>
                        <td><a href="/AdminHome" className="btn btn-primary">Home</a></td>
                        <td><a href="/AddActivity" className="btn btn-primary">Add Activity</a></td>
                       
                       
                     
                       
                    </tr>
                </table>    
                </body>
             
            </div>
        );
    }
}

export default ListOfActivity;