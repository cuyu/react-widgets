/**
 * Created by cuyu on 3/31/17.
 */
import Matrix from '../components/Matrix'
import {connect} from 'react-redux'
import {resetMatrix, moveOn, changeDirection} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleReset: () => {
            dispatch(resetMatrix(ownProps.width, ownProps.height, ownProps.snakeLength));
        },
        handleKeyPress: (event) => {
            switch (event.keyCode) {
                case 37:
                    dispatch(changeDirection('left'));
                    break;
                case 38:
                    dispatch(changeDirection('up'));
                    break;
                case 39:
                    dispatch(changeDirection('right'));
                    break;
                case 40:
                    dispatch(changeDirection('down'));
                    break;
                default:
                    console.log('No effect for this key:', event.keyCode);
            }
            dispatch(moveOn());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);