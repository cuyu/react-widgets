/**
 * Created by cuyu on 3/31/17.
 */
import Cell from '../components/Cell'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    // console.log('mapStateToProps', ownProps.id)
    return {
        value: state.matrix[ownProps.id].value,
    }
};


const CellWrapper = connect(mapStateToProps)(Cell);

export default CellWrapper