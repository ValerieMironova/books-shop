import {connect} from 'react-redux'
import ShoppingCart from "../../components/ShoppingCart";

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps
)(ShoppingCart)
