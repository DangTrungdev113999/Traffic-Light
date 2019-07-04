import React, { Component } from 'react';
import classNames from 'classnames';


class TrafficLight extends Component {
	constructor(props) {
        super(props);
        this.state = {
            currentColor: ''
        }


    }

	getNextColor(color){
		// console.log(this.state.currentColor)
        if(color === 'red') {
            this.setState({
                currentColor: 'orange'
            });
        }else if (color === 'orange') {
            this.setState({
                currentColor: 'green'
            });
        } else {
            this.setState({
                currentColor: 'red'
            });
        }
    }


    getColor = () => {
    	let { currentTime } = this.props
    	setInterval(() => {
            this.getNextColor(this.props.currentColor);
    		this.props.onAutoChangeColor(this.state.currentColor);
        }, currentTime );
    }

    changeTime = (value) => {
    	this.props.onAutoChangeTime(value)
    }

	render() {
		return (
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<button 
					type="button" 
					className="btn btn-success"
					onClick={ this.getColor }
				>Tự động</button>
				<hr/> 
				<div>thời gian: {this.props.currentTime } ms</div><br/>
				<button 
					type="button" 
					className="btn btn-primary"
					onClick={ () => this.changeTime(-1000) }
				>giản</button>&nbsp;
				<button 
					type="button" 
					className="btn btn-primary"
					onClick={ () => this.changeTime(1000) }
				>tằng</button>
				<hr/>
			</div>
			)
	}
}

export default TrafficLight;
