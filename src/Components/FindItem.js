import React from 'react';
import Item from './Item';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

function FindItem(props){
    return (
        <React.Fragment>
            <Searchbar onSearch={props.onSearch} details={props.itemList} />
            <ul>
            {Object.keys(props.itemList).map(key => <Item key={key} index={key} details={props.itemList[key]} deleteItem={props.deleteItem} />)}
            </ul>
            <ul>
                <SearchResults details={props.itemList} deleteItem={props.deleteItem} searchResults={props.searchResults} />
            </ul>
        </React.Fragment>
    )
}

export default FindItem;