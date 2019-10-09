import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    render(){
        return(
            <React.Fragment>
                <p>Login Page</p>
                <button>Go to Register</button>
                <button>Go to Dashboard</button>
            </React.Fragment>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup
})


export default connect(reduxState, null)(Login)