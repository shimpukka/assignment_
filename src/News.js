import React, {Component} from "react";

class News extends Component {
	
	constructor(props){
		super(props);
		this.state = {
		};
	}

	componentDidMount(){
		fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lianatech.com%2Fnews%2Fall-news.rss")
		.then(response => response.json())
		.then(data =>  {

			this.setState({data: data});
			console.log("this is", this);
			 })

	}


	render(){

	
		if(!this.state.data) return <p> Loading</p>

		return(

			<div className="bg-black-10 mt2 pb3">

				<h2 className="f2 tc pt3" id="news"> Latest News </h2>


				<div className="flex-ns justify-center-ns ">
				    <div className="bg-white w-20-l w-30-m pa3 ma3 br2">
				    	
				    	<p> {this.state.data.items[0].pubDate.split(" ")[0]}</p>
			     		<p> {this.state.data.items[0].title}</p>

				  	</div>
				  	<div className="bg-white w-20-l w-30-m pa3 ma3 br2">
				    	<p> {this.state.data.items[1].pubDate.split(" ")[0]}</p>
			     		<p> {this.state.data.items[1].title}</p>

				  	</div>
				  	<div className="bg-white w-20-l w-30-m pa3 ma3 br2">
				    	<p> {this.state.data.items[2].pubDate.split(" ")[0]}</p>
			     		<p> {this.state.data.items[2].title}</p>

				 	</div>
	 			</div>


 			</div>


		)


	}

} 



export default News;