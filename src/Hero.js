import React from 'react';
import "./Hero.css";

const Hero = () => {

	return(

		<div>
			<div id="Hero" className="ph6 tc parallax">
				
				<div className="flex justify-center">
					<h1 className="f1 fw3 white tc pt6">Software fueling digital marketing</h1>
				</div>

				<div className="flex justify-center">
					<a className="btn btn-success mh6 mb5" href="" role="button">Learn more</a>
				</div>
			</div>

			<div className="flex-l justify-center-l mv3 ">
				<div className="w-30-l w-90 tc center white-90 pv5 f2 mh1 br2 mb1" id="photo1"><a href="" className="link white hover-white-80">Company</a></div>
				<div className="w-30-l w-90 tc center white-90 pv5 f2 mh1 br2 mb1" id="photo2"><a href="" className="link white hover-white-80">Products</a></div>
				<div className="w-30-l w-90 tc center white-90 pv5 f2 mh1 br2 mb1" id="photo3"><a href="" className="link white hover-white-80">Contact us</a></div>
			</div>



			<div className="flex-ns justify-center-ns flex-wrap-m">
				
				<div className="w-20-l flex justify-center ma3">
					<div className="icon fa fa-suitcase pr3"></div> 
					<div className="f4"> <span className="f2">3000 <br /></span>Clients</div> 
				</div>

				<div className="w-20-l flex justify-center ma3">
					<div className="icon material-icons pr3 ">face</div> 
					<div className="f4"> <span className="f2">180 <br /></span>Employees</div>
				</div>

				<div className="flex w-20-l justify-center ma3">
					<div className="icon fa fa-globe pr3"></div> 
					<div className="f4"> <span className="f2">10000 <br /></span>Daily users</div>
				</div>

			</div>


		</div>
	)
}

export default Hero;

