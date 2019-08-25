
import React from "react";
import Header from "./Header"
import Carousel from "./Carousel"
import Footer from "./Footer";

export default function Layout(props){

//all code here

    return (
        <div className="App">
        <Header 
            changeView={props.changeView}
            // cart={props.shoppingCart}
        />
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <p className="lead">Shop Name</p>
                <div className="list-group">
                    <button href="#" className="list-group-item">Category 1</button>
                    <button href="#" className="list-group-item">Category 2</button>
                    <button href="#" className="list-group-item">Category 3</button>
                </div>
            </div>
            {/*comments */}
            <div className="col-md-9">
                <Carousel />
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    <div className="container">

        <hr/>
        <Footer />
    </div>
        </div>
    );
}

