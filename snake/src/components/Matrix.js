/**
 * Created by cuyu on 3/31/17.
 */
import React, {Component} from 'react'
import CellWrapper from '../containers/CellWrapper'
import './Matrix.css'


class Matrix extends Component {
    render() {
        // The Matrix should only be rendered once while some Cells may be rendered later.
        console.log('Matrix rendered.');
        this.props.handleReset();
        let content = [];
        for (let i = 0; i < this.props.height; ++i) {
            let rowContent = [];
            for (let j = 0; j < this.props.width; ++j) {
                let id = i * this.props.height + j;
                rowContent.push(<CellWrapper key={id.toString()} id={id} value={0}/>);
            }
            content.push(
                <div key={i.toString()} className="Row">
                    {rowContent}
                </div>
            );
        }

        return (
            <div className="Matrix">
                {content}
            </div>
        )
    }
}

export default Matrix