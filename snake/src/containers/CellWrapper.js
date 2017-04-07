/**
 * Created by cuyu on 3/31/17.
 */
import Cell from '../components/Cell'
import {connect} from 'react-redux'
import {snakeState} from '../selectors'


const mapStateToProps = (state, ownProps) => {
    return {
        value: snakeState(state).matrix.value[ownProps.id],
    }
};


const CellWrapper = connect(mapStateToProps)(Cell);

export default CellWrapper;