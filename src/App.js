import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebaseUtils'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInSignUp from './pages/signin-signup/SignInSignUp'
import Header from './components/header/Header'



class App extends Component {
    constructor() {
        super()

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' component={SignInSignUp} />
                </Switch>
            </div>
        )
    }
}

export default App;
