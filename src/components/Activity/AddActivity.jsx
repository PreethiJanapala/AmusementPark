import React, { FormEvent }  from "react";

const AddActivity = () => {

        const AddActivity = (event: FormEvent) =>{
            const activityUIN = event.target.activityUIN.value;
            const activityName = event.target.activityName.value;
            
            
            const data = {
              

            "activityName": activityName,  
            "activityUIN" : activityUIN,
                
            };

            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };

           
            fetch("http://localhost:8083/api/v4/activity", request)
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
                <h3>Add Activity</h3>
                <form class="form-group" onSubmit={AddActivity}>
                    
                    <input class="form-control" type="text" placeholder="activityUIN" name="activityUIN"/>
                    <input class="form-control" type="text" placeholder="activityName" name="activityName"/>
                    
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        );
    
}

export default AddActivity;