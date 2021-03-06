import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home/home';
import Mentors from "./pages/mentors/mentors";
import MentorConnect from "./pages/mentor-connect/mentor-connect";
import Header from './components/header/header.component';


import SignInOrSignUpPage from "./pages/sing-in-or-up/sign-in-or-up";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

//insert test comment to see if pushes are going through to github
console.log(process.env.REACT_APP_TWILIO_ACCOUNT_SID);
console.log(process.env.REACT_APP_TWILIO_API_KEY);
console.log(process.env.REACT_APP_TWILIO_API_SECRET);


class App extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            }
            this.setState({currentUser: userAuth});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Router>
                <Header currentUser={this.state.currentUser} />
                        <Switch>
                            <Route path='/sign-in'><SignInOrSignUpPage /></Route>
                            <Route path='/mentors'><Mentors /></Route>
                            <Route path='/mentor-connect'><MentorConnect /></Route>
                            <Route path='/'><Home /></Route>
                        </Switch>
            </Router>
        );
    }
}

export default App;





