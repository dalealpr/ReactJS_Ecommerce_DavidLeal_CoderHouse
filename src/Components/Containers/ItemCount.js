//Hook States
import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(1);
    // Funcion sumar productos
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    // Funcion sumar productos
    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    // Funcion sumar productos
    const AddCart = () => {
        onAdd(contador)
    }

    return (
        <div style={styles.itemCountContainer} className="itemCount-container">
            <div style={styles.countContainer} className="Count-container">
                <h3 style={styles.countTitle} >Guitarra Acustica</h3>

                <div style={styles.countInfo} >
                    <button style={styles.countBtn} onClick={restar}>-</button>
                    <span>{contador}</span>
                    <button style={styles.countBtn} onClick={sumar}>+</button>
                </div>

                <span style={styles.countStock}>Stock: {stock}</span>

                <button style={styles.countBtnCart} onClick={AddCart}>Agregar al Carrito</button>
            </div>
        </div>
    )
}


//ESTILOS CSS
const styles = {
    itemCountContainer: {
        gridArea: 'item-count',
        width: 'max-width',
        height: '520px',
        color: 'black',
        backgroundColor: '#e2e2e2',

        display: 'flex',
        justifyContent: 'center',

    },

    countContainer: {
        gridArea: 'item-count',
        width: '340px',
        height: '350px',
        margin: '60px 0',
        color: 'black',
        backgroundColor: 'white',
        fontWeight: '200',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Titulo del producto
    countTitle: {
        fontSize: '20px',
        fontWeight: '300',
    },

    //Contador
    countInfo: {
        width: '30%',
        border: 'solid 1px #c4c4c4',
        fontSize: '20px',
        fontWeight: '300',
        margin: '50px 0 20px 0',

        display: 'flex',
        justifyContent: 'space-between',
    },

    countBtn: {
        width: '27px',
        backgroundColor: '#393939',
        border: 'solid 1px #393939',
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
    },

    countStock: {
        fontWeight: '300',
        marginBottom: '40px',
    },

    //Btn Agregar al carrito
    countBtnCart: {
        padding: '10px 18px',
        backgroundColor: '#ffd200',
        color: 'black',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '4px',
    },
}
export default ItemCount