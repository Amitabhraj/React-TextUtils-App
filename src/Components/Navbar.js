import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
	return (
	<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
	  <div className="container-fluid">
	    <Link className="navbar-brand" to="/">{props.headName}</Link>
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarSupportedContent">
	      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	        <li className="nav-item">
	          <Link className="nav-link active" aria-current="page" to="/">{props.homeName}</Link>
	        </li>
	        <li className="nav-item">
	          <Link className="nav-link active" to="/about">{props.aboutName}</Link>
	        </li>
	      </ul>
	      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
		  <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckChecked"/>
		  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.modetext}</label>
		</div>
	    </div>
	  </div>
	</nav>
	)
}

// Navbar.propTypes = {
// 	headName: PropTypes.string.isRequired,
// 	homeName: PropTypes.string.isRequired,
// 	aboutName: PropTypes.string.isRequired}


// Navbar.defaultProps = {
// 	headName: "set Name",
// 	homeName: "set home name",
// 	aboutName: "set about name"};
