import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home/home';
import Mentors from "./pages/mentors/mentors";
import MentorConnect from "./pages/mentor-connect/mentor-connect";
import SignInOrSignUpPage from "./pages/sing-in-or-up/sign-in-or-up";
import Profile from "./pages/profile/profile";

import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            this.setState({ currentUser: user});

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Router>
                <div currentUser={this.state.currentUser}>
                    <nav className='top-nav'>
                        <ul className='nav-titles'>
                            <li className='nav-item'> <Link to="/">KH</Link></li>
                            <li className='nav-item'> <Link to="/"> Home</Link></li>
                            <li className='nav-item'> <Link to="/mentor-connect">Mentors Connect</Link></li>
                            <li className='nav-item' ><Link to="/mentors">Mentors</Link></li>
                            <li className='nav-item' ><Link to="/profile">Profiles</Link></li>
                            <li className='nav-item' ><Link to="/sign-in">Sign In</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path='/sign-in'><SignInOrSignUpPage /></Route>
                        <Route path='/profile'><Profile /></Route>
                        <Route path='/mentor-connect'><MentorConnect /></Route>
                        <Route path='/'><Home /></Route>

                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;





