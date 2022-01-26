import React from 'react';
import './Footer.css'

function Footer(){
    return (
        <React.Fragment>
			<footer>
				<div className="footer-content">
					<img className="logo-footer" src="/images/NFT-logo.ico" width={70} alt="Logo" />
					{/* footer links */}
					<ul className="footer-links">
						<li><a href="/contacto">Contacto</a></li>
						<li><a href="/privacidad">Privacidad</a></li>
						<li><a href="/news">News</a></li>
					</ul>
					{/* social media */}
					<ul className="socials">
						<li><a href="#"><i className="fab fa-facebook" /></a></li>
						<li><a href="#"><i className="fab fa-twitter" /></a></li>
						<li><a href="#"><i className="fab fa-instagram" /></a></li>
						<li><a href="#"><i className="fab fa-google" /></a></li>
					</ul>
				</div>

				{/* copyright */}
				<div className="footer-bottom">
					<p>copyright ©2021 NFT. designed by <span> equipo-10</span></p>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;