import React, { Component } from 'react';
import CardList from '../Components/CardList';
import './App.css';
import Header from '../Components/Header';
import ErrorBoundary from '../Components/ErrorBoundary';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    };

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1 className='tc' style={{marginTop: '40vh'}}>There are no robots</h1>
        } else {
            return (
                <div className='tc'>
                    <Header onSearchChange = {this.onSearchChange} />
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots} />
                    </ErrorBoundary>
                </div>
            );
        }
   }
};
