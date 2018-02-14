import React from 'react';
import lianaLogo from "./images/liana.png";
import "./Header.css";

const Header = () => {

	return(

		<div >

			<ul className="nav flex justify-content-end pr6-l pr2-m pv2" id="header">
				
				<li className="nav-item">
					<a className="nav-link white active hover-black" href="#news">News</a>
				</li>
				<li className="nav-item">
				<a className="nav-link white hover-black" href="">Intranet</a>
				</li>

				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle bg-white br2 black" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">In English</a>
					<div className="dropdown-menu ">
						<a className="dropdown-item" href="">Suomeksi</a>
						<a className="dropdown-item" href="">På svenska</a>
					</div>
				</li>
			</ul>





			<ul className="nav flex justify-around ph6-l ph2 mt3 flex-column-m items-center-m">
				
				<div className="w-25-l flex justify-end pr4"> 
					<img src ={lianaLogo} alt="liana technology logo" height="60" />

				</div>

				<div className="w-50-l  flex justify-start pt3">

					<li className="nav-item">
						<a className="nav-link black-50 hover-black" href="#photo1">Company</a>
					</li>
					<li className="nav-item">
						<a className="nav-link black-50 hover-black" href="#photo2">Products</a>
					</li>

	     			<li className="nav-item">
				        <a className="nav-link black-50 hover-black" href="#photo3">Contact us</a>
				    </li>

				</div>

				<div className="w-25-l flex justify-end">
					<form className="form-inline my-2">
			      		<input className="form-control" type="search" placeholder="Search" aria-label="Search" />
			     		 <button className="btn btn-outline-success my-2 my-sm-0 white" type="submit" id="searchButton">Search</button>
			   		</form>
				</div>

				
			</ul>


</div>




	)



	}

	export default Header;