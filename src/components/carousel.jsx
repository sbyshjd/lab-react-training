import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state= {
            num:0,
        }
    }
    leftHandler=() => {
        let length = this.props.imgs.length;
        let newNum =(this.state.num-1+length)%length
        this.setState({
            num:newNum,
        })
    }
    rightHandler=() => {
        let length = this.props.imgs.length;
        let newNum =(this.state.num+1)%length
        this.setState({
            num:newNum,
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.leftHandler}> {'\u1438'} </button>
                <img src={this.props.imgs[this.state.num]} alt="carousel"/>
                <button onClick={this.rightHandler}> {'\u1433'} </button>
            </div>
        )
    }
}

export default Carousel;