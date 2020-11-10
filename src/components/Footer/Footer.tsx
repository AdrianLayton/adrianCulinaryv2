import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <div>
					<div className="newsletter">
						<div className="newsletter-row">
							<div className="newsletter-tagline">
								<h3 className="newsletter-heading"> Never have a boring meal again</h3>
								<p className="tagline"> Get weekly recipes and our first course free</p>
							</div>
							<div className="around-form">
								<form method="post" action="/" className="sign-up"> 
									<div className="input-container">
										<input type="email" name="email" className="newsletter-email" placeholder="name@example.com" /> 
										<button type="submit" className="form-submit"> Subscribe</button>
									</div>
								</form>
								<p aria-hidden="true"> 
									Thank you! We've sent you a confirmation email 
								</p>
							</div>
						</div>
					</div>
					<footer>
						<div className="footer-top">
							<div className="footer-container">
								<div className="footer-item">
									<h2 className="written-logo"> Adrian Culinary </h2>
								</div>
								<div className="footer-item">
									<ul className="site-links">
										<li> Latest recipes</li>
										<li> About </li>
										<li> Cooking Resources </li>
									</ul>
								</div>
							</div>	
						</div>

						<div className='footer-bottom'>
							<div className="scl-media">
								<a href="https://www.instagram.com/adrianculinary" className="sm-icon">
									<i className="fab fa-instagram fa-2x"></i>
								</a>
								<a href="#" className="sm-icon">
									<i className="fab fa-facebook-f fa-2x"></i>
								</a>
							</div>
							<div className="utility-container">
								<ul className="utility-links">
									<li><a href="#"></a> Terms of Use</li>
									<li><a href="#"></a> Privacy Policy</li>
									<li>© 2018 AdrianCulinary</li>
								</ul>
							</div>
						</div>
					</footer>
				</div>
);

export default Footer;
