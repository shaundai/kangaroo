import React, { useState } from 'react';

function Pouch(){
    const [pouchContent, setPouchContent] = useState({name: 'Scissors', desc: 'Just reg scissors', box: 4, quantity: 1})
        return (
            <li>
                <h2>Scissors</h2>
                <h3>The scissors that I always use for hair cutting</h3>
                <p>Box Number 2-clickable link</p>
                <p>Quantity: 1</p>
            </li>
        )
}

export default Pouch;