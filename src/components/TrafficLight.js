import React, { Component } from 'react';
import classNames from 'classnames';


class TrafficLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'orange', 'green']
        }
    }
    showColor(color) {
        return {
            backgroundColor: color
        }
    }

    render() {
        let elmColor = this.state.color.map((color, index) => {
            return   <div 
                        className={classNames('buld', {
                            active: color === this.props.activeColor
                        })}
                        style= { this.showColor(color) }
                        key= { index }>
                    </div>
        })

        return (
            <div className='TrafficLight'>
                { elmColor }
            </div>
        )
    }
}

export default TrafficLight;
