import React, { Component } from 'react';

class SingleColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:this.props.color,
            value:this.props.value,
        }
    }
    changeHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })

        this.props.onChange(e.target.name,e.target.value)
    }
    render() {
        let divStyle = {width:'50px',height:'50px'}
        switch(this.state.color) {
            case 'r':
                divStyle.backgroundColor=`rgb(${this.state.value},0,0)`;
            break;
            case 'g':
                divStyle.backgroundColor=`rgb(0,${this.state.value},0)`;
            break;
            case 'b':
                divStyle.backgroundColor=`rgb(0,0,${this.state.value})`;
            break;
            default:
                divStyle.backgroundColor='';
        }
        return (
            <div style={{display:'flex',margin:'10px'}}>
            <div style={divStyle}>color</div>
            <label style={{fontSize:'2rem'}}>{this.props.color.toUpperCase()}</label>
            <input style={{height:'30px'}} type="number" name={this.state.color} value={this.state.value} onChange={(e)=>this.changeHandler(e)}/>
            </div>

        )
    }
}

export default SingleColorPicker;