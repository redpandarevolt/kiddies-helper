import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Mentors from './mentors';
import Rooms from './rooms';
import MyStuff from './mystuff';



import './App.css';

export default function App()  {
    return (
        <Router>
            <div>
                <nav className='top-nav'>
                    <ul className='nav-titles'>
                        <li className='nav-item'> <Link to="/"> Home</Link></li>
                        <li className='nav-item'> <Link to="/mentors">Mentors</Link></li>
                        <li className='nav-item' ><Link to="/rooms">Rooms</Link></li>
                        <li className='nav-item' ><Link to="/mystuff">MyStuff</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/mystuff'><MyStuff /></Route>
                    <Route path='/rooms'><Rooms /></Route>
                    <Route path='/mentors'><Mentors /></Route>
                    <Route path='/'><Home/></Route>
                </Switch>

            </div>
        </Router>
    );
}


// const Home = () => {
//     <div><h2>Home</h2></div> <h2>Home</h2>;
// };
//
// const Mentors = () =>  {
//     <div> <h2>Mentors</h2></div>
// };
//
// const Rooms = () =>  {
//     <div><h2>Rooms</h2></div>
// };
// const MyStuff = () => {
//     <div><h2>MyStuff</h2></div>
// };


