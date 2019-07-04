import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
import Auto from './components/Auto';
import HandWork from './components/HandWork';
    
class App extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: 'red',
            currentTime: 2000

        }
    }

    onAutoChangeColor = (value) => {
        console.log(value);
        this.setState({
            currentColor: value
        });
    } 

    onAutoChangeTime = (value) => {
        this.setState({
            currentTime: (this.state.currentTime + value >= 2000 && this.state.currentTime + value <= 100000) ?
                        this.state.currentTime + value : this.state.currentTime
        })
    }

    render() {
        return (
            <div className='container mt-50'>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <TrafficLight
                        activeColor={ this.state.currentColor }
                    />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title">Điều khiển</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">

                                <Auto
                                    currentColor = { this.state.currentColor }
                                    currentTime = { this.state.currentTime }
                                    onAutoChangeColor={ this.onAutoChangeColor }
                                    onAutoChangeTime={ this.onAutoChangeTime }
                                />

                                <HandWork/>

                            </div>
                        </div>
                    </div> 
                </div>


            </div>
        )
    }
}

export default App;
