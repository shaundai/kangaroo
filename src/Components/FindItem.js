import React from 'react';
import Item from './Item';
import Searchbar from './Searchbar';

function FindItem(props){
    return (
        <React.Fragment>
            <Searchbar onSearch={props.onSearch} />
            <ul>
            {Object.keys(props.itemList).map(key => <Item key={key} index={key} details={props.itemList[key]} deleteItem={props.deleteItem} />)}
            </ul>
        </React.Fragment>
    )
}

export default FindItem;