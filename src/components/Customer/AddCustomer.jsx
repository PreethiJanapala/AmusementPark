//import Password from "antd/lib/input/Password";
import React, { FormEvent }  from "react";

const AddCustomer = () => {

        const AddCustomer = (event: FormEvent) =>{
           
            
            const customerAge = event.target.customerAge.value;
            const customerId = event.target.customerId.value;
            const customerName = event.target.customerName.value;
            const noOfActivitys = event.target.noOfActivitys.value;
            
            const data = {
                "customerId":  customerId,
                "customerAge": customerAge ,
                "customerName": customerName,
                "noOfActivitys": noOfActivitys,
                
            };

            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };

          
            fetch("http://localhost:8083/api/v3/customer", request)
             .then(response => response.json())
             .then(data => {
                    alert("Added Successfully");
             }, error => {
                 alert("Error:: "+error);
             })
        }
  
        return(
            <div class="container-sm" width="50%">
                <br></br>
                <br></br>
                <h3>Add Customer</h3>
                <form class="form-group" onSubmit={AddCustomer}>
                    
                    <input class="form-control" type="text" placeholder="customerId" name="customerId"/>
                    <input class="form-control" type="text" placeholder="customerAge" name="customerAge"/>
                    <input class="form-control" type="text" placeholder="customerName" name="customerName"/>
                    <input class="form-control" type="text" placeholder="noOfActivitys" name="noOfActivitys"/>
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        );
    
}

export default AddCustomer;