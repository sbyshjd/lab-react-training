import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import FacebookCard from './facebookCard';

const countryArr = [...new Set(profiles.map(p=>p.country))]
const countries = countryArr.map(c=>{
    return {name:c,isClicked:false}
})

class FaceBook extends Component {
    constructor() {
        super();
        this.state = {
            profiles:profiles,
            countries:countries,
        }
    }

    clickHandler=(e) => {
        // console.log(e.target.value)
        //assign a new property: isSelected to the profiles
        const newProfiles = [...this.state.profiles].map(p => {
            p.country===e.target.value ? p.isSelected=true : p.isSelected=false
         return p
        })
        const newCountries = [...this.state.countries].map(c => {
            c.name===e.target.value ? c.isClicked=true : c.isClicked=false
         return c
        })
        this.setState({
            profiles:newProfiles,
            countries:newCountries,
        })

    }

    render() {
        console.log(countryArr)
        return (
            <div>
                {this.state.countries.map((c,i)=> <input style={c.isClicked ? {backgroundColor:'blue'} : {backgroundColor:'white'}} key={i} onClick={(e)=>this.clickHandler(e)} type="button" value={c.name}/> )}
                {this.state.profiles.map((p,i)=><FacebookCard key={i} {...p} />)}
            </div>
        )
    }
}

export default FaceBook;