import React  from "react";
import ProductDetail from "./ProductDetail"
import store from "../store";

export default class ProductList extends React.Component{
    state={
        products: []
    }
    componentDidMount(){
        fetch('https://acastore.herokuapp.com/products')
    .then((response)=>{return response.json()})
    .then((data) =>{
      store.dispatch({type: "PRODUCTS_LOADED", value: data})
    });
        // let products = store.getState().products
        // this.setState({products: products});
        store.subscribe(()=>{
            let products = store.getState().products
            this.setState({products: products});
        });
    }
    
    render(){
        let productDetails = null;
        if(this.state.products && this.state.products.length > 0){
            productDetails = this.state.products.map((p,i)=>{
                return  <ProductDetail 
                showAddButton = {true}
                // addToCart={this.props.addItemToCart}
                key={i} 
                product={p} />
            });
        }else{
            productDetails = "No products available";
        }
            return (
            <div>
                {productDetails}
            </div>
            )
    }
}