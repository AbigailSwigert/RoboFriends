import React from 'react';
import SearchBox from './SearchBox';
import './Header.css';

const Header = ({ onSearchChange }) => {
    return (
        <div id='header'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
        </div>
    );
};

export default Header;