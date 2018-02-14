import React from 'react';
import "./Footer.css";

const Footer = () => {

	return(

	
		<div className="bg-black white-80 ph3 pv4 flex-l ">	

				<div className="w-40-l pl3 pt3 flex-m flex-column-m items-center-m pl6-l"> 
					<h3 className="f4 white"> Liana Technologies </h3> 
					
					<div className="flex">
				
						<div>
							<h4 className="f5 pt3 white"> Sales and inquiries </h4>
							<p> Email: sales@lianatech.com  <br /> Phone: +358 10 387 7053  </p>
						</div>
					
						<div className="pt4 pl4">
							<button type="button" className="btn btn-success">Contact us</button>
						</div>

					</div>
				</div>

				

				
				<div className="w-50-l w-100-m flex flex-column items-end items-center-m pt3">
					
					<div>
						<ul className="nav">
							<li className="nav-item ">
								<a className="nav-link white-80" href="#photo1">Company</a>
							</li>
							<li className="nav-item">
								<a className="nav-link white-80" href="#photo2">Products</a>
							</li>
							<li className="nav-item">
								<a className="nav-link white-80" href="#photo3">Contact us</a>
							</li>
							<li className="nav-item">
								<a className="nav-link white-80" href="#news">News</a>
							</li>
							<li className="nav-item">
								<a className="nav-link white-80" href="">Intranet</a>
							</li>

						</ul>
					</div>

					<div className="social tr pt4"> 
					<a href="https://www.facebook.com/lianatech/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f dim"></i></a>
					<a href="https://twitter.com/LianaTech" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter dim"></i></a>
					<a href="ps://www.linkedin.com/company/liana-technologies" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin dim"></i></a>
					</div>

				</div>


		</div>
	

			

	)
}

	export default Footer;