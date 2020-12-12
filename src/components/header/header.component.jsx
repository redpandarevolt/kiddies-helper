import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='top-nav'>
        <ul className='nav-titles'>
            <li className='nav-item'> <Link to="/">KH</Link></li>
            <li className='nav-item'> <Link to="/"> Home</Link></li>
            <li className='nav-item'> <Link to="/mentor-connect">Mentor Connect</Link></li>
            <li className='nav-item' ><Link to="/mentors">Mentors</Link></li>

            {currentUser ? (
                <div className='nav-item' onClick={() => auth.signOut()}>
                    <button>SIGN OUT</button>

                </div>  ) : (
                <Link className='nav-item' to={'/sign-in'}>
                    <button>SIGN IN</button>
                </Link>
            )}
            <li className='nav-item'>
                <Link className='nav-item' to={'/sign-in'}>
                    <button>SIGN UP</button>
                </Link>
            </li>
        </ul>
    </div>
)

export default Header;