import React from "react";

 class ViewBooking extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ViewBooking: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8083/api/v2/ticketBooking")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    ViewBooking: data
                });
        }, (error) => {
            alert(error);
        });
    } 

    render(){
        return (
            <div align='container-fluid'>
                <div align='center'><h3>Bookings</h3></div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>bookingId</th>
                            <th>bookingDate</th>
                            
                            <th>noOfCustomers</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ViewBooking.map(ViewBooking => (
                                <tr>
                                     <td>{ViewBooking.bookingId}</td>
                                   
                                    <td>{ViewBooking.bookingDate}</td>
                                   
                                    <td>{ViewBooking.noOfCustomers}</td>
                                    
                                </tr>
                            ))
                         }
                    </tbody>
                </table>

            </div>
         )
    }

}


export default ViewBooking;