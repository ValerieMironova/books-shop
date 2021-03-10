import {connect} from 'react-redux'
import Categories from "../../components/Categories";

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(
    mapStateToProps
)(Categories)
