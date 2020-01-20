import React from 'react';

function AddItemForm ({ nameRef, descRef, ownerRef, boxRef, locationRef, quantityRef, addItem}){
    nameRef = React.createRef();
    descRef = React.createRef();
    ownerRef = React.createRef();
    boxRef = React.createRef();
    locationRef = React.createRef();
    quantityRef = React.createRef();

    const createItem = (e) => {
        e.preventDefault();
        const item = {
            name: nameRef.current.value,
            desc: descRef.current.value,
            owner: ownerRef.current.value,
            box: boxRef.current.value,
            location: locationRef.current.value,
            quantity: quantityRef.current.value,
        }
        addItem(item);
        e.currentTarget.reset();
    }
    return (
        <form onSubmit={createItem}>
            <input name="name" ref={nameRef} type="text" placeholder="What is this?" required></input>
            <input name="desc" ref={descRef} type="text" placeholder="Describe this item."></input>
            <input name="owner" ref={ownerRef} type="text" placeholder="Who does this belong to? (ex. the cat, Sally)"></input>
            <input name="box" ref={boxRef} type="text" placeholder="Which box?" required></input>
            <input name="location" ref={locationRef} type="text" placeholder="Where is this box?"></input>
            <input name="quantity" ref={quantityRef} type="text" placeholder="Quantity"></input>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default AddItemForm;