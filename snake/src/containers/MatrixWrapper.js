/**
 * Created by cuyu on 3/31/17.
 */
import Matrix from '../components/Matrix'
import {connect} from 'react-redux'
import {resetMatrix, moveOn, changeDirection} from '../actions'
import {snakeState} from '../selectors'


const mapStateToProps = (state, ownProps) => {
    return {
        stop: snakeState(state).snake.dead,
        width: snakeState(state).matrix.width,
        height: snakeState(state).matrix.height,
        snakeLength: snakeState(state).matrix.snakeLength,
        difficulty: snakeState(state).matrix.difficulty,
    };  // TODO: use a `stop` state to manage the state.
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleReset: () => {
            dispatch(resetMatrix());
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
        },
        handleSnakeMove: () => {
            dispatch(moveOn());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);