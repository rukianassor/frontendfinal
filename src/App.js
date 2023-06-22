import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import  Home  from './components/Home';
import Medicine from './components/Medicine';
import Cosmetic from './components/Cosmetic';
import Order from './components/Order';
import Addmedicine from './components/Addmedicine';
import Addcosmetic from './components/Addcosmetic';
import Addother from './components/Addother';
import Otherproduct from './components/Otherproduct';
import Login from './components/Login'
import Contact from './components/Contact';
import About from './components/About';
import Admin from './components/Admin';
import Pharmacies from './components/admin/Pharmacies';
import Addpharmacy from './components/admin/Addpharmacy';
import Test from './components/admin/Test';
import Report from './components/admin/Report';
import Payments from './components/admin/Payments';
import Editmedicine from './components/Editmedicine';



class App extends React.Component{

render() {
  return (
    
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route exact path="/home" element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path="/medicine" element={<Medicine/>} />
        <Route path="/cosmetic" element={<Cosmetic/>} /> 
        <Route path="/order" element={<Order/>} /> 
        <Route path="/addmedicine" element={<Addmedicine/>} /> 
        <Route path="/addcosmetic" element={<Addcosmetic/>} /> 
        <Route path="/addother" element={<Addother/>} />
        <Route path="/otherproduct" element={<Otherproduct/>} />
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/report' element={<Report />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/editmedicine/:id' element={<Editmedicine/>} />

        {/* Admin */}
        <Route path='/pharmacies' element={<Pharmacies/>} />
        <Route path='/Addpharmacy' element={<Addpharmacy/>} />
        <Route path='/test' element={<Test/>}/>

        
        
       </Routes>
    </BrowserRouter>
  );
}
};

export default App;