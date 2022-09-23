import React from 'react';
import ItemCount from './itemCount/ItemCount';

const Item = ({ producto, onAdd, stock }) => {
    return (
        <div className='Item' style={styles.itemContainer}>
            <h4>Items</h4>
            <a className='prod_a' href="index.html"><img src={producto.img} style={styles.itemImg} alt="img" /></a>
            <div>
                <h5 style={styles.itemTitulo}>{producto.nombre}</h5>
            </div>
            <span style={styles.itemPrecio}>$ {producto.precio}</span>

            <ItemCount onAdd={onAdd} stock={stock} initial={1} />

        </div>
    )
}

//ESTILOS CSS
const styles = {
    itemContainer: {
        width: '40%',
        height: '540px',
        backgroundColor: 'white',
        color: 'black',
        margin: '0 25px',
        padding: '0 13px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    itemTitulo: {
        height: '45px',
        marginTop: '10px',
        fontSize: '16px',
    },

    itemImg: {
        width: '220px',
        backgroundColor: 'red',
    },

    itemPrecio: {
        marginTop: '14px',
        fontSize: '22px',
        fontWeight: '700',
    },

}

export default Item
