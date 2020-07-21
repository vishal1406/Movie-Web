import React, { Component }  from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';
import {SearchBarView} from './SearchBarView';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    timeout = null;

    doSearch = (event) => {
        this.setState({value: event.target.value })
        clearTimeout(this.timeout);

    this.timeout = setTimeout( () => {
        this.props.callback(this.state.value);
    }, 500)
}  

    render(){
        return (
            <SearchBarView state={this.state}/>
        );
    }

}

export default SearchBar;