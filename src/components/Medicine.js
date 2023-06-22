import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function Medicine() {
  // const [id, setId] = useState('')
  const [data, setData] = useState([]);
  const [medicinename, setMedicinename] = useState('');
  const [medicineprice, setMedicineprice] = useState('');
  const [medicineamount, setMedicineamount] = useState('');
  const [medicinecategory, setMedicinecategory] = useState('');
  const [medicineconfigurationdate, setMedicineconfigurationdate] = useState('');
  const [medicineinputdate, setMedicineinputdate] = useState('');
  const [medicineexpiredate, setMedicineexpiredate] = useState('');
  const [medicinelogo, setMedicinelogo] = useState('');

const handleAdd=(e)=>{
  e.preventDefault()
    const medicine={medicinename,medicineprice,medicineamount,medicinecategory,medicineconfigurationdate,medicineinputdate,medicineexpiredate,medicinelogo}
    console.log(medicine)
    fetch("http://localhost:8000/med/",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(medicine)

    }).then(()=>{
      console.log("New Medicine added")
    })
  }
//view by id


// delete
  const deleteRow = (id) => {
    axios.delete('http://localhost:8000/med' `/${id}/`)
        .then(res => {
            this.getPost();
        });
}
  
  

  useEffect(() => {
    fetch('http://localhost:8000/med/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const [open, setOpen] = React.useState(false);
  const [openi, setOpeni] = React.useState(false);
  const [openii, setOpenii] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (event) => {
    console.log(event.currentTarget.id)
    setOpen(true);
  };
  const handleClickOpeni = () => {

    setOpeni(true);
  };
  const handleClickOpenii = () => {
    setOpenii(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosei = () => {
    setOpeni(false);
  };
  const handleCloseii = () => {
    setOpenii(false);
  };

  

    return (
    <>
    <Navbar />
    <Sidebar />
    <div className="wrapper">
 
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Medicine List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/addmedicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default">
              Add New Medicine
                </button>
              </li></Link>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
   
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
           
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                
                <h3 className="card-title">DataTable with medicine features</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                    
                      <td><b>Sn</b></td>
                      <td><b>Medicine's Name</b></td>
                      <td><b>Medicine's Price</b></td>
                      <td><b>Medicine's Category</b></td>
                      <td><b>Medicine's Amount</b></td>
                      <td><b>Medicine's Input Date</b></td>
                      <td><b>Medicine's Configuration Date</b></td>
                      <td><b>Medicine's Expire Date</b></td>
                      <td><b>Action</b></td>
                    
                    </tr>
                  </thead>
                  <tbody>
                  {data.map(medicine => (
                    <>
                    <tr>
                        <td key={medicine.id}>{medicine.id}</td>
                        <td key={medicine.id}>{medicine.medicinename}</td>
                        <td key={medicine.id}>{medicine.medicineprice}.00/=</td>
                        <td key={medicine.id}>{medicine.medicinecategory}</td>
                        <td key={medicine.id}>{medicine.medicineamount}</td>
                        <td key={medicine.id}>{medicine.medicineinputdate}</td>
                        <td key={medicine.id}>{medicine.medicineconfigurationdate}</td>
                        <td key={medicine.id}>{medicine.medicineexpiredate}</td>
                        <td class="project-actions text-right">
                        <a class= "btn btn-info btn-sm " onClick={handleClickOpen}  >
                                <i class="fa fa-eye" aria-hidden="true">
                                </i>
                                View
                            </a>
                            <Dialog fullScreen={fullScreen} open={open}  onClose={handleClose} aria-labelledby="responsive-dialog-title" >
                                  <DialogTitle id="responsive-dialog-title">
                                    {<h4><b>MEDICINE DETAILS</b></h4>}
                                  </DialogTitle>
                                  <DialogContent>
                                    <DialogContentText>
                                  <div className='row'>
                                    <div className="media lg col-lg-6">
                                      <img src="/logo.jpg" alt="User Avatar" class="img-circle " height="250" width="250"/>
                                    </div>
                                    <div className="col-lg-12">
                                    <h5><b> MEDICINE_NAME : &nbsp;&nbsp;&nbsp;{medicine.medicinename} </b></h5> 
                                    <h5><b> MEDICINE_PRICE : &nbsp;&nbsp;&nbsp;{medicine.medicineprice } TZS</b></h5>
                                    <h5><b> MEDICINE_CATEGORY : &nbsp;&nbsp;&nbsp;{medicine.medicinecategory} </b></h5> 
                                    <h5><b> CONF_DATE : &nbsp;&nbsp;&nbsp;{medicine.medicineconfigurationdate} </b></h5>
                                    <h5><b> EXP_DATE : &nbsp;&nbsp;&nbsp; {medicine.medicineexpiredate} </b></h5>
                                    <h5><b> INPUT_DATE : &nbsp;&nbsp;&nbsp;{medicine.medicineinputdate} </b></h5>
                                    </div>
                                    </div>
                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button autoFocus onClick={handleClose}> <h5><b>EDIT </b> </h5> </Button>
                                    <Button onClick={handleClose} autoFocus> <h5><b>  OK </b></h5> </Button>
                                  </DialogActions>
                                </Dialog>
                            &nbsp;&nbsp;
                            <Link to={`/editmedicine/${medicine.id}`} a class="btn btn-info btn-sm "  > <i class="fas fa-pencil-alt"> </i>
                                Edit
                            </Link>
                            
                            &nbsp;&nbsp;
                            <a class="btn btn-danger btn-sm "  onClick={(e) => this.deleteRow(medicine.id, e)} >
                                <i class="fas fa-trash">
                                </i>
                                Delete
                            </a>
                            <Dialog fullScreen={fullScreen} open={openii}  onClose={handleCloseii} aria-labelledby="responsive-dialog-title" >
                                  <DialogContent>
                                    <DialogContentText>
                                  <div className='row'>
                                    <div className="media lg col-lg-6 justify-content-center">
                                      <img src="/logo.jpg" alt="User Avatar" class="img-circle " height="250" width="250"/>
                                    </div>
                                    <div className="col-lg-12">
                                    <h5><b> ARE YOU SURE, YOU WANT TO DELETE!!.. </b></h5> 
                                    </div>
                                    </div>
                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button autoFocus onClick={handleCloseii}> <h5><b>NO </b> </h5> </Button>
                                    <Button Link to='/medicine' onClick={(e) => this.deleteRow(medicine.id, e)} autoFocus> <h5><b>  YES </b></h5> </Button>
                                  </DialogActions>
                                </Dialog>
                        </td>
                    </tr>
                    </>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer className="main-footer">
    <div className="float-right d-none d-sm-block">
      <b>Version</b> 3.2.0
    </div>
    
  </footer>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
</div>

    </>
  )
}

export default Medicine

