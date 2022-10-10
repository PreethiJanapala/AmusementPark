import React from "react";

 class Customer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            customers: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8083/api/v3/customer/findall")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    customers: data
                });
        }, (error) => {
            alert(error);
        });
    } 

    render(){
        return (
            <div align='container-fluid'>
                <div align='center'><h3>Customers Information</h3></div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                           <th>customerId</th>
                            
                            
                            <th>customerAge</th>
                            <th>customerName</th>
                            <th>noOfActivitys</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(customer => (
                                <tr>
                                   <td>{customer.customerId}</td>
                                   
                                    <td>{customer.customerAge}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.noOfActivitys}</td>
                                </tr>
                            ))
                         }
                    </tbody>
                </table>

            </div>
         )
    }

}


export default Customer;