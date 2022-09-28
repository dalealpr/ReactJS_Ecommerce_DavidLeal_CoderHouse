import React from 'react';
import Item2 from './item2';
import ItemCount from './itemCount/ItemCount';

const ItemDetail = ({ item, stock, onAdd }) => {


    return (
        < div className='itemDetail' style={styles.ItemDetail}>


            <h3 style={styles.h3}>ItemDetail</h3>

            <div style={styles.DetailCont}>

                <img style={styles.DetailImg} src={item.img} />

                <div style={styles.DetailContText}>
                    <h4 style={styles.h4}>{item.nombre}</h4>
                    <span style={styles.precio}>${item.precio}</span>
                    <p style={styles.parrafo}>{item.descrp}</p>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>

        </div>
    )
}

const styles = {
    ItemDetail: {
        width: '65%',
        padding: '30px 80px',
        backgroundColor: '#333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    h3: {
        color: 'white',
    },

    h4: {
        fontSize: '27px',
        marginBottom: '30px',
    },

    DetailCont: {
        display: 'grid',
        height: '460px',
        gridTemplateColumns: "repeat(2, 1fr)",
        padding: '40px 70px',
        gap: '90px',
    },

    DetailContText: {
        width: '600px',
    },

    DetailImg: {
        width: '370px',
    },

    precio: {
        fontSize: '30px',
        marginBottom: '30px',
    },

    parrafo: {
        marginTop: '30px',
        textAlign: 'left',
    },

}
export default ItemDetail;