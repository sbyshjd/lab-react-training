import React, { Component } from 'react';
import './numberstable.css';

class NumbersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:this.fun(this.props.limit)
        }
    }
    fun = limit => {
        let numArr = [];
        for(let i=1;i<=limit;i++) {
            numArr.push(i);
    }
        return numArr;
    }
    render() {
        return (
            <div className='number-table'>
            {this.state.arr.map((n,i)=> n%2 ? <div key={i} className='number-card'>{n}</div> : <div key={i} style={{backgroundColor:'red'}} className='number-card'>{n}</div> )}
            </div>
        )
    }
}

export default NumbersTable;