/**
 * Created by cuyu on 3/31/17.
 */
import Matrix from '../components/Matrix'
import {connect} from 'react-redux'
import {resetMatrix, moveOn} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleReset: () => {
            dispatch(resetMatrix(ownProps.width, ownProps.height, ownProps.snakeLength));
        },
        handleKeyPress: () => {
            console.log('keyPress')
            dispatch(moveOn());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);