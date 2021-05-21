import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import './App.css';
import Header from '../Components/Header';
import ErrorBoundary from '../Components/ErrorBoundary';

function App() {
    
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(robots.length === 0) {
        return <h1 className='tc' style={{marginTop: '40vh'}}>There are no robots</h1>
    } else {
        return (
            <div className='tc'>
                <Header onSearchChange = {onSearchChange} />
                <ErrorBoundary>
                    <CardList robots = {filteredRobots} />
                </ErrorBoundary>
            </div>
        );
    }
};

export default App;
