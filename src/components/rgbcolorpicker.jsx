import React, { Component } from 'react';
import SingleColorPicker from './singlecolorpicker';

class RgbColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            rValue:0,
            gValue:0,
            bValue:0,
        }
    }
    changeHandler = (color,value) => {
        switch (color) {
            case 'r':
                this.setState({
                    rValue:value
                })
            break;
            case 'g':
                this.setState({
                    gValue:value
                })
            break;
            case 'b':
                this.setState({
                    bValue:value
                })
            break;
            default:
                this.setState({})

        }
    }

    render() {
        let divStyle = {width:'100px',height:'100px'}
        divStyle.backgroundColor = `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`
        return (
            <div>
                <SingleColorPicker color='r' value={this.state.rValue} onChange={this.changeHandler} />
                <SingleColorPicker color='g' value={this.state.gValue} onChange={this.changeHandler} />
                <SingleColorPicker color='b' value={this.state.bValue} onChange={this.changeHandler} />
                <div style={divStyle}>RGB</div>
            </div>

        )
    }
}

export default RgbColorPicker;