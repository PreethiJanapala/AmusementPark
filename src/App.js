//import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import AddAdmin from './components/Admin/AddAdmin';
import NewLogin from './components/NewLogin';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import AddBooking from './components/Booking/AddBooking';
import ViewBooking from './components/Booking/ViewBooking';
import Booking from './components/Booking/Booking';
import AddActivity from './components/Activity/AddActivity';
//import ViewActivity from './components/Activity/ViewActivity';
import ListOfActivity from './components/Activity/ListOfActivity';
import AddCustomer from './components/Customer/AddCustomer';
import ViewCustomer from './components/Customer/ViewCustomer';
import User from './components/User/User';
import AdminHome from './components/AdminHome';
import CustomerHome from './components/CustomerHome';
import Customer from './components/Customer/ViewCustomer';
function App() {
  return (
    <div className="App">
      <header>
      <Header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route path="/Navbar" element={<Navbar/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/NewLogin" element={<NewLogin/>}></Route>
          <Route path="/CustomerHome" element={<CustomerHome/>}></Route>
          <Route path="/User" element={<User/>}></Route>
          <Route path="/ViewCustomer" element={<ViewCustomer/>}></Route>
          <Route path="/AddCustomer" element={<AddCustomer/>}></Route>
          <Route path="/Customer" element={<Customer/>}></Route>
          <Route path="/AddActivity"element={<AddActivity/>}></Route>
          <Route path="/Booking" element={<Booking/>}></Route>
          <Route path="/AddBooking" element={<AddBooking/>}></Route>
          <Route path="/ViewBooking" element={<ViewBooking/>}></Route>
          <Route path="/ListOfActivity" element={<ListOfActivity/>}></Route>
          <Route path="/AddAdmin" element= {<AddAdmin />} ></Route>
  <Route path="/AdminHome" element={<AdminHome/>}></Route>
      
  
          {/*<Route path="/ViewActivity"element={<ViewActivity/>}></Route>*/}
        </Routes>
        </BrowserRouter>
      </Header>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
