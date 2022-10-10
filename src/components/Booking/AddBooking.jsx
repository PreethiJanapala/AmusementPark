import React, { FormEvent }  from "react";

const AddBooking = () => {

        const AddBooking = (event: FormEvent) =>{
            
            const bookingId = event.target.bookingId.value;
            const bookingDate = event.target.bookingDate.value;
            const noOfCustomers = event.target.noOfCustomers.value;
            
           
            
            const data = {
              
            
            "bookingId": bookingId,
            "bookingDate": bookingDate,
            "noOfCustomers": noOfCustomers,
           
                    
            };

            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };

           
            fetch("http://localhost:8083/api/v2/ticketBooking", request)
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
                <h3>Add Booking</h3>
                <form class="form-group" onSubmit={AddBooking}>
                  
                    <input class="form-control" type="text" placeholder="bookingId" name="bookingId"/>
                    <input class="form-control" type="text" placeholder="bookingDate" name="bookingDate"/>
                    <input class="form-control" type="text" placeholder="noOfCustomers" name="noOfCustomers"/>
                    
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        );
    
}

export default AddBooking;