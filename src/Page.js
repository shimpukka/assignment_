import React, { Component } from 'react';
import Header from "./Header";
import Hero from "./Hero";
import News from "./News";
import References from "./References";
import Subscription from "./Subscription";
import Footer from "./Footer";




class Page extends Component {
  render() {
    return (

      <div>
      <Header />
      <Hero/>
      <News />
      <References />
      <Subscription />
      <Footer />
 
      
      </div>

    );
  }
}

export default Page;
