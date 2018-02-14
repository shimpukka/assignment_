import React from 'react';

class Subscription extends React.Component {

	constructor(props){
		super(props);
		this.state ={ isToggleOn: false};
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({isToggleOn: !this.state.isToggleOn});
		console.log(this.state.isToggleOn);
	}



	render(){

		const isToggleOn = this.state.isToggleOn;

			let message="";
			if (isToggleOn){
				message="Thank you for your subscription!";
			}


		return(

			
			<div className="tc mv5 bt bw1 b--black-30">
				<h2 className="pt4"> Subscribe to our news letter </h2>
				<p> Follow our story and get the latest promotonial <br /> news about our products and events </p>

				<form className="flex justify-center">
				  <div className="form-group mh2 w-40">
				    <input type="email" className="h2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				  </div>
				  
				  <button type="submit" className="h2 btn btn-primary" onClick={this.handleClick}> Subscribe</button>
			
				</form>

				
				<p>{message} </p>
			
			</div>
		);
	}
	
}

export default Subscription;