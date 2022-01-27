//poner el usuario logueado en la cabecera

import React from 'react';
import "./style.css"

function Header(){
    return(
        <React.Fragment>
			{/*<!-- Header -->*/}
			<nav className="navbar navbar-expand navbar-light bg-black topbar mb-4 static-top shadow navbar">

				{/*Principio del Logotipo*/}
				<div className="logotipo">
					<a href="http://localhost:3050/"><img src="./images/NFT-logo.ico" width={80} alt="Logo" /></a>
				</div>
				<a href="http://localhost:3050/"><div className="brand-title"><h1>NFT</h1></div></a>
				{/*Final del Logotipo*/}

				{/*Principio items del usuario*/}
				<ul className="navbar-nav ml-auto navbar-links">		

					<div className="topbar-divider d-none d-sm-block"></div>

					<li className="nav-item dropdown no-arrow mx-1">
						<a href="http://localhost:3050/users/register" className="nav-link dropdown-toggle" id="alertsDropdown"> 
							<i className="fas fa-user"></i>
						</a>
					</li>
					<li className="nav-item dropdown no-arrow mx-1">
						<a href="http://localhost:3050/users/login" className="nav-link dropdown-toggle" id="messagesDropdown"> 
							<i class="fas fa-sign-in-alt"></i>
						</a>
					</li>
					{/* lugar para poner al usuario logueado
					<li className="nav-item dropdown no-arrow">
						<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
							<img className="img-profile rounded-circle" alt="Espacio para usuario" width="60"/>
						</a>
					</li>
					*/}
				</ul>
				{/*Final Items de usuario*/}
			</nav>
			{/*<!-- End of Header -->*/}
        </React.Fragment>
    )
}
export default Header;