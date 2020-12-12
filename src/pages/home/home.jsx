import './home.styles.scss';
import React, { Component } from 'react';
import {SearchBox} from "../../components/search-box/search-box.components";
import {CardList} from "../../components/card-list/card-list.components";



// const Home =()=> (
//     <div className='homepage'>
//         <div className='directory-menu'></div>
//         <div className='menu-item'>
//             <div className='content'>
//                 <h1 className='title'>Welcome to Kiddies Helper</h1>
//                 <span className='subtitle'>Matching Students with Virtual Mentors</span>
//                 <span className='subtitle'>For Successful Learning and Social Connection</span>
//             </div>
//         </div>
//     </div>
//
// );





class Home extends Component {
    constructor(){
        super();

        this.state = {
            minions: [],
            searchField: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ minions: users }));
    }

    handleChange(e) {
        this.setState({searchField: e.target.value})

    }

    render() {

        const { minions, searchField } =  this.state;
        const filteredMinions = minions.filter(minions =>
            minions.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='homepage'>
                <div className='directory-menu'></div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Welcome to Kiddies Helper</h1>
                        <span className='subtitle'>Matching Students with Virtual Mentors</span>
                        <span className='subtitle'>For Successful Learning and Social Connection</span>
                    </div>
                </div>

                <div className='search-options'>
                    <div className='box'>
                        <SearchBox
                            placeholder='name'
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className='box'>
                        <SearchBox
                            placeholder='zip code'
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className='box'>
                        <SearchBox
                            placeholder='grade'
                            handleChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;