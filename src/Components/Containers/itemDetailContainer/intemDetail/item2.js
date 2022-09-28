import React from 'react';
//Import Components
import ItemDetail from './itemDetail';


const Item2 = ({ item, onAdd }) => {
    return (
        <div style={styles.ItemDtl} className='item2-container'>
            {item.map((produ) => <ItemDetail  item={produ} stock={produ.stock} onAdd={onAdd}/>)}

        </div>
    )
}

const styles = {
    ItemDtl: {
        width: 'max-width',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

}
export default Item2