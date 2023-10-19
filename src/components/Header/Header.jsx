export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <span style={{ fontWeight: "bold" }}>Edie</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span style={{ fontWeight: "bold" }}>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span style={{ fontWeight: "bold" }}>Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span style={{ fontWeight: "bold" }}>Our Works</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span style={{ fontWeight: "bold" }}>Clients</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span style={{ fontWeight: "bold" }}>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
