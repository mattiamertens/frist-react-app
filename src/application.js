import React, {Component} from 'react';
import HighScore from './HighScore';

class application extends Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }
    componentDidUpdate (props, state){
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen){
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render(){
        let {count} = this.state;

        return ( 
            <div>
                <h1>You have clicked {count} times</h1>
                <HighScore 
                    overTen = {this.state.overTen}
                    onReset = {(e) => this.resetCount(e)}
                />

                <button onClick={(e) => this.handleClick()} >Click Me</button>
            </div>
        );
    }
}

export default application;