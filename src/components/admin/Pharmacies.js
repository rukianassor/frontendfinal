import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const Pharmacies = () => {
  
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

    useEffect(() => {
      fetch('http://localhost:8000/pham/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  

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
            <h1>Pharmacies List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/test" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Add New Pharmacy
                </button>
              </li></Link>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">DataTable with Pharmacy features</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                      <td><b>Sn</b></td>
                      <td><b>Pharmacy Name</b></td>
                      <td><b>Owner Name</b></td>
                      <td><b>Pharmacy Address</b></td>
                      <td><b>Business Licence</b></td>
                      <td><b>Pharmacy Contact</b></td>
                      <td><b>Latitude</b></td>
                      <td><b>Longitude</b></td>
                      <td><b>Region</b></td>
                      <td><b>Action</b></td>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map(pharmacy => (
                    <>
                    <tr>
                        <td key={pharmacy.id}>{pharmacy.id}</td>
                        <td key={pharmacy.id}>{pharmacy.pharmacyname}</td>
                        <td key={pharmacy.id}>{pharmacy.ownername}</td>
                        <td key={pharmacy.id}>{pharmacy.pharmacyaddress}</td>
                        <td key={pharmacy.id}>{pharmacy.businesslicence}</td>
                        <td key={pharmacy.id}>{pharmacy.pharmacycontact}</td>
                        <td key={pharmacy.id}>{pharmacy.latitude}</td>
                        <td key={pharmacy.id}>{pharmacy.longitude}</td>
                        <td key={pharmacy.id}>{pharmacy.region}</td>
                        <td class="project-actions text-right">
                        <a class= "btn btn-info btn-sm " onClick={handleClickOpen}>
                                <i class="fa fa-eye" aria-hidden="true">
                                </i>
                                View
                            </a>
                            <Dialog
                                  fullScreen={fullScreen}
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="responsive-dialog-title"
                                >
                                  <DialogTitle id="responsive-dialog-title">
                                    {"More info about Pharmacy"}
                                  </DialogTitle>
                                  <DialogContent>
                                    <DialogContentText>
                                      PharmacyName : {pharmacy.pharmacyname} 
                                      ownername: {pharmacy.ownername}
                                      pharmacyaddress: {pharmacy.pharmacyaddress}
                                      pharmacycontact: {pharmacy.pharmacycontact}

                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                      
                                    </Button>
                                    <Button onClick={handleClose} autoFocus>
                                      Agree
                                    </Button>
                                  </DialogActions>
                                </Dialog>
                            &nbsp;&nbsp;
                            <a class="btn btn-info btn-sm " href="#">
                                <i class="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            
                            &nbsp;&nbsp;
                            <a class="btn btn-danger btn-sm " href="#">
                                <i class="fas fa-trash">
                                </i>
                                Delete
                            </a>
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

export default Pharmacies
