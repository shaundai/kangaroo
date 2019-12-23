import React, { useState } from 'react';

function Searchbar(props){
    const [term, setTerm] = useState('');

    function search() {
        const newTerm = {term}
        props.onSearch(newTerm)
        }

    function handleTermChange(e){
        setTerm(e.currentTarget.value)
    }

    return (
        <React.Fragment>
            <input onChange={handleTermChange} placeholder='Search for an item...'></input>
            <button onClick={search}>SEARCH</button>
        </React.Fragment>
    )
}

export default Searchbar;