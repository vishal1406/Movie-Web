import React, { Component }  from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

export const SearchBarView = ({state,doSearch})=>{
    console.log(state);
    return (
        <div className="rmdb-searchbar">
            <div className="rmdb-searchbar-content">
                <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                    <input
                     type="text"
                        className="rmdb-searchbar-input"
                        placeholder="Search..."
                        onChange={doSearch}
                        value={state.value}
                    />
            </div>
        </div>
    )}