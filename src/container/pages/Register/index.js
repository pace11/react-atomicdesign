import React, { Component } from 'react'
import firebase from '../../../config/firebase'

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        // console.log(e.target.id)
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state
        console.log('data before send: ', email, password)
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('success: ', res)
            })
            .catch(function(error){
                console.log(error.code, error.message)
            })
    }

    render(){
        return(
            <React.Fragment>
                <p>Register Page</p>

                <input placeholder="Email" id="email" type="text" onChange={this.handleChangeText}/>
                <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText}/>
                <button onClick={this.handleRegisterSubmit}>Register</button>
            </React.Fragment>
        )
    }
}

export default Register