import './home.styles.scss';
import React, { Component } from 'react';



const Home =()=> (
    <div className='homepage'>
        <div className='directory-menu'></div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>Kiddies Helper - Helping Kids Succeed!</h1>
                <span className='subtitle'>Find A Mentor</span>
            </div>
        </div>
    </div>
);

export default Home;