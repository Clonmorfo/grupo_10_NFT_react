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
						<li><a href="http://localhost:3050/#staff">Contacto</a></li>
						<li><a href="https://consultoria.anexia.es/Portals/2/privacidad.JPG">Privacidad</a></li>
						<li><a href="https://es.cointelegraph.com/tags/nft">News</a></li>
					</ul>
					{/* social media */}
					<ul className="socials">
						<li><a href="https://www.facebook.com/profile.php?id=100077303125121"><i className="fab fa-facebook" /></a></li>
						<li><a href="https://twitter.com/grupo10NFT"><i className="fab fa-twitter" /></a></li>
						<li><a href="https://www.instagram.com/grupo10dh/"><i className="fab fa-instagram" /></a></li>
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