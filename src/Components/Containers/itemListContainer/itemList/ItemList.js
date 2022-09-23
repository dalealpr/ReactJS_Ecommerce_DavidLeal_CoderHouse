import React from 'react';
import Item from './item/Item';

const ItemList = ({ products, onAdd }) => {
    return (
        < div style={styles.itemList}>
            <h3>ItemList</h3>
            <div style={styles.itemsCont}>

                {products.map((producto) => <Item key={producto.id} producto={producto} onAdd={onAdd} stock={producto.stock}/>)}
            </div>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    itemList: {
        width: '90%',
        backgroundColor: '#c6c6c6',
        color: 'black',
        padding: '25px 0',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemsCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

}

export default ItemList