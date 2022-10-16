function SideBar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 sticky-top">
          <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
            <span className="brand-text font-weight-light">Sales Data</span>
          </a>
        
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
              </div>
            </div>
        
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">

                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-list"></i>
                    <p>
                      Summary
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        
    )
}

export default SideBar;
