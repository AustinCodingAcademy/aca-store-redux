import React from "react";
import store from '../store';

export default class Header extends React.Component {
    state={
        cartCount: 0
    }
    componentDidMount(){
        store.subscribe(()=>{
            let shoppingCart = store.getState().shoppingCart.length
            this.setState({cartCount: shoppingCart})
        })
    }
    render(){
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>
                
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="1">About</a>
                            </li>
                            <li>
                                <a href="2">Services</a>
                            </li>
                            <li>
                                <a href="3">Contact</a>
                            </li>
                            <li>
                                <a onClick={()=>{
                                    this.props.changeView(0)
                                }}
                                href="#">Products</a>
                            </li>
                            <li >
                                <a onClick={()=>{
                                    this.props.changeView(1)
                                }}
                                
                                href="#">Items In Cart ({this.state.cartCount})</a>
                            </li>
                        </ul>
                    </div>
                
                </div>
            
            </nav>
        );
    }
}