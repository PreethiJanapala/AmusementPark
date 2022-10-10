import React, { FormEvent }  from "react";

const AddAdmin = () => {

        const AddAdmin = (event: FormEvent) =>{
            
            const adminId = event.target.adminId.value;
            const adminName = event.target.adminName.value;
           
           
            
            const data = {
            "adminId": adminId,
            "adminName": adminName,
            
                    
            };

            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };

           
            fetch("http://localhost:8083/ap1/v5/admin", request)
             .then(response => response.json())
             .then(data => {
                    alert("Added Successfully");
             }, error => {
                 alert("Error:: "+error);
             })
        }
  
        return(
            <div class="container">
                <br></br>
                <br></br>
                <h3>Add AddAdmin</h3>
                <form class="form-group" onSubmit={AddAdmin}>
                  
                    <input class="form-control" type="text" placeholder="adminId" name="adminId"/>
                    <input class="form-control" type="text" placeholder="adminName" name="adminName"/>
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        );
    
}
export default AddAdmin;