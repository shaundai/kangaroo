import React from 'react';
import Item from './Item';

function SearchResults(props){

    return (
        <li>
        {Object.keys(props.searchResults).map(key => <Item key={key} index={key} details={props.searchResults[key]} deleteItem={props.deleteItem} />)}
        </li>
    )
}

export default SearchResults;