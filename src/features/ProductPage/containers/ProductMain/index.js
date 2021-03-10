import {connect} from 'react-redux'
import React from "react";
import ProductMain from "../../components/ProductMain";

const mapStateToProps = state => ({
    items: state.items
});

const ProductMainContainer = (props) => {
    const productId = Number(props.id);
    const currentItem = props.items.find(item => item.id === productId);

    return(
       <ProductMain currentItem={currentItem} dispatch={props.dispatch}/>
    )
};

export default connect(
    mapStateToProps
)(ProductMainContainer)
