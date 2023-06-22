import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="#" className="brand-link">
      <span className="brand-text font-weight-light">ADMIN SITE (PMS)</span>
    </a>
    <div className="sidebar">
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
          <li className="nav-item">
            <a href="#" className="nav-link">
              <p>
                <span className="badge badge-info right"></span>
              </p>
            </a>
          </li>
         
          
          <li className="nav-item">
            <Link to= "/" className="nav-link">
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-header">ITEMS</li>
          <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="nav-icon far fa-circle text-warning" />
              <p>Pharmacies</p>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            <div className="nav-link">
            <Link to= "/addpharmacy" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p className="float-right  ">Add Pharmacy</p>
            </Link>
            </div>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="nav-link">
            <Link to= "/pharmacies" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p className="float-right  ">Details</p>
            </Link>
            </div>
          </a>
        </div>
      </li>
        </ul>
      </nav>
    </div>
  </aside>
  )
}

export default Sidebar
