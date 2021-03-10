import React from "react";
import ProductMain from "./containers/ProductMain";

const ProductPage = (props) => {

    const id = props.match.params.productId;

    return (
        <div>
            <ProductMain id={id}/>
        </div>

    );
};

export default ProductPage;
