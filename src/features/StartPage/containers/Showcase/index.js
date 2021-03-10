import {connect} from 'react-redux'
import Showcase from "../../components/Showcase";

const mapStateToProps = state => ({
    items: state.items
});

export default connect(
    mapStateToProps
)(Showcase)
