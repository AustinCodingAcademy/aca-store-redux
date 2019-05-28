import React from "react";
import ProductDetail from "./ProductDetail";

export default function ShoppingCart(props){
    const items =props.cart.map((p,i)=>{
        return <ProductDetail key={i} product={p} />
    });
    return (
      <div>
          {items}
      </div>
    )
}