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
        }else if (color === 'green') {
            this.setState({
                currentColor: 'red'
            });
        } else {
        	this.setState({
                currentColor: ''
            });
        }
    }

    getColor = () => {
    	let { currentTime } = this.props
    	setInterval( async () => {
           		await this.getNextColor(this.props.currentColor);
    			await this.props.onAutoChangeColor(this.state.currentColor);
        }, currentTime );

    }

    changeTime = (value) => {
    	this.props.onAutoChangeTime(value)
    }

	render() {
		return (
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div>thời gian lập: { this.props.currentTime } ms</div><br/>
				<button 
					type="button" 
					className="btn btn-primary"
					onClick={ () => this.changeTime(-1000) }
				>giảm</button>&nbsp;
				<button 
					type="button" 
					className="btn btn-primary"
					onClick={ () => this.changeTime(1000) }
				>tằng</button>
				<hr/>
				<div>tự động chạy</div><br/>
				<button 
					type="button" 
					className="btn btn-success"
					onClick={ this.getColor }
				>Bắt đầu</button>
				<hr/> 
			</div>
			)
	}
}

export default TrafficLight;
