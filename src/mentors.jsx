import './mentors.styles.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list.components';
import { SearchBox } from './components/search-box.components';


class Mentors extends Component {
    constructor(){
        super();

        this.state = {
            minions: [],
            searchField: ''
        };
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
            <div className='Mentors'>
                <h2>Kiddies Helper</h2>
                <h1>Mentors</h1>
                <SearchBox
                    placeholder='search minions'
                    handleChange={this.handleChange}
                />
                <CardList minions={ filteredMinions } />
            </div>
        );
    }
}

export default Mentors;