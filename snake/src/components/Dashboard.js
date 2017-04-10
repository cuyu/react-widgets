/**
 * Created by cuyu on 4/6/17.
 */
import React, {Component} from 'react'
import InputWrapper from '../containers/InputWrapper'


class Dashboard extends Component {

    render() {
        return (
           <form className="Dashboard">
               <label>Difficulty:</label>
               <InputWrapper type="number" min="1" max="9" id="difficulty"/>
               <br/>
               <label>Matrix Width:</label>
               <InputWrapper type="number" min="5" id="width"/>
               <br/>
               <label>Matrix Height:</label>
               <InputWrapper type="number" min="5" id="height"/>
               <br/>
               <label>Snake Length:</label>
               <InputWrapper type="number" min="2" id="snakeLength"/>
               <br/>
               <label>Score:</label>
               <InputWrapper disabled id="score"/>
           </form>
        );
    }
}

export default Dashboard;