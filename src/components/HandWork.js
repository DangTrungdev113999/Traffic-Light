import React, { Component } from 'react';
import classNames from 'classnames';


class HandWork extends Component {
	constructor() {
		super();
		this.state = {
			colors: ['red', 'orange', 'green']
		}
	}

	showColor(color) {
		return {
			backgroundColor : color
		}
	}

	activeColor(color) {
		this.props.onActiveColor(color);
	}

	reset = () => {
		this.props.onReset(true);
	}
    	
    render() {
    	const { colors } = this.state;
    	let elmColor = colors.map((color, index) => {
    		return <span
    					key = { index }
    					style = { this.showColor(color) }
    					className = { (this.props.currentColor === color) ? 'active' : '' }
    					onClick = { () => this.activeColor(color) }
    				> </span>
    	})


        return (
        	<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	            <button 
	            	type="button"
	            	className="btn btn-promary"
	            	onClick = { this.reset }
	            >Thủ công</button>
	            <hr/>
	            <div>color: { this.props.currentColor }</div>
	            <div className="control-color">
	           		 { elmColor }
	            </div>

            </div>
		)
    }
}

export default HandWork;
