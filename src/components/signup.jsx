import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password: '',
            nationality:'',
        }
    }

    helloGenerator = lang => {
        let greeting = 'Hallo!';
        switch(lang) {
            case 'Dutch':
                greeting='Hallo!';
            break;
            case 'Chinese':
                greeting= '你好!';
            break;
            case 'Spainish':
                greeting='Hola!';
            break;
            case 'French':
                greeting='Bonjour';
            break;
            case 'British':
                greeting='Hello!'
            break;
            default:
                greeting ='Hallo!'  
        }
        return greeting;
    }
    validateEmail=(email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    emailHandler = (e) => {
        let {name,value}=e.target;
        this.validateEmail(value) ? this.setState({ [name]:value,emailIsValid:true}) : this.setState({ [name]:value,emailIsValid:false})

    }

    validatePassword =(password) => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(strongRegex.test(password)) {
            return 'strong'
        } else {
            return 'weak'
        }
        
    }

    passwordHandler = (e) => {
        let {name,value}=e.target;
        if(this.validatePassword(value)==='weak') {
            this.setState({
                [name]:value,
                passwordValidate:'weak'
            })
        } else if (this.validatePassword(value)==='strong') {
            this.setState({
                [name]:value,
                passwordValidate:'strong'
            })             
        }

    }

    nationalityHandler = (e) => {
        let {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        let passwordStyle = 'form-control';
        if(this.state.passwordValidate==='strong') {
            passwordStyle = 'form-control is-valid'
        } else if(this.state.passwordValidate==='weak') {
            passwordStyle = 'form-control is-invalid'
        }
        let emailStyle = 'form-control';
        if(this.state.emailIsValid===true) {
            emailStyle = 'form-control is-valid'
        } else if(this.state.emailIsValid===false) {
            emailStyle = 'form-control is-invalid'
        }

        return (
            <div>
            <form>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class={emailStyle} name='email' value={this.state.email} onChange={(e)=>this.emailHandler(e)}/>
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    {this.state.emailIsValid ? <p style={{color:'green'}}>Email is valid</p> : <p style={{color:'red'}}>Email is not valid</p> }
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class={passwordStyle} name='password' value={this.state.password} onChange={(e)=>this.passwordHandler(e)}/>
                    {this.state.passwordValidate==='strong' ? <p style={{color:'green'}}>password is strong</p> : <p style={{color:'red'}}>password is weak</p> }
                </div>
                <div class="form-group">
                    <label>Nationality</label>
                    <select class="form-control" name='nationality' value={this.state.nationality} onChange={(e)=>this.nationalityHandler(e)}>
                    <option>Dutch</option>
                    <option>Chinese</option>
                    <option>Spainish</option>
                    <option>French</option>
                    <option>British</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <h3>{this.helloGenerator(this.state.nationality)}</h3>
            <h3>Your Email is: {this.state.email}</h3>
            </div>

        )
    }
}

export default SignUp;