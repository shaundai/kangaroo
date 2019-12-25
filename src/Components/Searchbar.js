import React, { useState } from 'react';

function Searchbar(props){
    const [term, setTerm] = useState('');
    
    const handleTermChange = (e) => {
        setTerm(e.currentTarget.value)
    }

    const search = () => {
        const newTerm = Object.values({term})
        props.onSearch(newTerm)
        }

    return (
        <React.Fragment>
            <input onChange={handleTermChange} placeholder='Search for an item...'></input>
            <button onClick={search}>SEARCH</button>
        </React.Fragment>
    )
}

export default Searchbar;