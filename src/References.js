import React from 'react';
import boschLogo from "./images/bosch.svg";
import bodyShopLogo from "./images/bodyShop.svg";
import laplandHotel from "./images/laplandHotel.gif"
import ikeaLogo from "./images/ikea.svg";


const References = () => {

	return(

		<div className=" mt2">

			<h2 className="f2 tc pv3"> References</h2>

			<div className="flex-ns justify-center-ns flex-wrap-ns">

			    <div className="pt0 w-20-l w-40-m ma3 flex flex-column items-center ba bw1 br2 b--black-30">

			    	<div className="h4 w-100 bb bw1 b--black-30 flex justify-center items-center"> <img src={boschLogo} alt ="Bosch logo" width="200" /> </div>
			    	
			    	<div className="tc mt3 ph2"><h4> Robert Bosch</h4>
			    	<p> Bosch is a multinational engineering and electronis company.</p></div>
			  	</div>

			  	<div className="w-20-l w-40-m ma3 flex flex-column items-center ba bw1 br2 b--black-30">
			  		
			  		<div className="h4 w-100 bb bw1 b--black-30 flex justify-center items-center"> <img src={bodyShopLogo} alt ="TheBodyShop logo" width="100"/> </div>
			    	
			    	<div className="tc mt3 ph2"><h4> The Body Shop</h4>
			    	<p>The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p></div>

			  	</div>

			  	<div className=" w-20-l w-40-m ma3 flex flex-column items-center ba bw1 br2 b--black-30">

			  		<div className="logo w-100 bb bw1 b--black-30 flex justify-center items-center h4"> <img src={laplandHotel} alt ="Lapland Hotel logo" width="200" /> </div>
			    	<div className="tc mt3 ph2"> <h4> Lapland Hotels</h4>
			    	<p>Lapland Hotels is the largest and the most diverse hotel chain in Lapland.</p></div>
				</div>


				<div className="w-20-l w-40-m ma3 flex flex-column items-center  ba bw1 br2 b--black-30">

			  		<div className="logo w-100 bb bw1 b--black-30 flex justify-center items-center h4"> <img src={ikeaLogo} alt ="Ikea logo" width="200" /> </div>
			    	
			    	<div className="tc mt3 ph2"><h4> Ikea </h4>
			    	<p>Ikea is a multinational furniture store.</p></div>
				</div>

				

	 		</div>

	 	</div>



	)
}

export default References;