import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Topbar(){
  const [total, setTotal] = useState([]);
  const [total1, setTotal1] = useState([]);
  const [total2, setTotal2] = useState([]);
  
  useEffect(() => {
      axios.get('http://localhost:8000/med/')
      .then(response => setTotal(response.data))
      .catch(error => console.log(error));
    }, []);

    useEffect(() => {
      axios.get('http://localhost:8000/cos/')
      .then(response => setTotal1(response.data))
      .catch(error => console.log(error));
    }, []);

    useEffect(() => {
      axios.get('http://localhost:8000/order/')
      .then(response => setTotal2(response.data))
      .catch(error => console.log(error));
    }, []);
      
    const totalmed =total.length;
    const totalcos =total1.length;
    const totalor =total2.length;


  return (
  <div className="container-fluid">
  <div className="row">  
    <div className="col-lg-3 col-6">
      <div className="small-box bg-info ">
        <div className="inner">
          <h3>{totalmed}</h3>
          <p><h4>TOTAL MEDICINES</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-bag" />
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-6">
      <div className="small-box bg-success">
        <div className="inner">
          <h3>{totalcos}<sup style={{fontSize: 20}}></sup></h3>
          <p> <h4>TOTAL COSMETICS</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-stats-bars" />
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-6">
      <div className="small-box bg-warning">
        <div className="inner">
          <h3>{totalor}</h3>
          <p><h4>CUSTOMER ORDERS</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-person-add" />
        </div>
        
      </div>
    </div>
    <div className="col-lg-3 col-6">
      <div className="small-box bg-danger">
        <div className="inner">
          <h3>0</h3>
          <p><h4>PRODUCTS EXPIRED</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-pie-graph " />
        </div>
       
      </div>
    </div>
  </div>

</div>

  )
}

export default Topbar
