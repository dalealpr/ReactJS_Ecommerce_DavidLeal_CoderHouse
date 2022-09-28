import React from 'react';
//Import Components
import ItemDetail from './itemDetail';


const Item2 = ({ item }) => {
    return (
        <div className='item2-container'>
            {item.map((produ) => <ItemDetail item={produ} />)}

        </div>
    )
}


export default Item2