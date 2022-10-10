
import React, { FormEvent }  from "react";

const User = () => {

        const User = (event: FormEvent) =>{
            const userId = event.target.userId.value;
            const userName = event.target.userName.value;
            const userAddress = event.target.userAddress.value;
            const userPhone = event.target.userPhone.value;
            const userPassword = event.target.userPassword.value;
            const userEmail = event.target.userEmail.value;
            
           
           
           
            
            const data = {
              
            "userId" : userId,
            "userName": userName,
            "userAddress": userAddress,
            "userEmail": userEmail,
            "userPhone":userPhone,
            "userPassword":userPassword
           

            
                    
            };

            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };

           
            fetch("http://localhost:8083/api/v1/user", request)
             .then(response => response.json())
             .then(data => {
                    alert("Customer Added Successfully");
             }, error => {
                 alert("Error:: "+error);
             })
        }
  
        return(
            <div class="container-sm" width="50%">
                <br></br>
                <br></br>
                <h3>Add User</h3>
                <form class="form-group" onSubmit={User}>
                    <input class="form-control" type="text" placeholder="userId" name="userId"/>
                    <input class="form-control" type="text" placeholder="userName" name="userName"/>
                    <input class="form-control" type="text" placeholder="userPhone" name="userPhone"/>
                    <input class="form-control" type="text" placeholder="userAddress" name="userAddress"/>
                    <input class="form-control" type="text" placeholder="userEmail" name="userEmail"/>
                    <input class="form-control" type="text" placeholder="userPassword" name="userPassword"/>
                    
                    
                    
                    
                    
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        );
    
}

export default User;