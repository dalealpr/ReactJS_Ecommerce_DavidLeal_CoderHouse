import React from 'react';
// Icono carrito (Material Icons)
import CartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
    return (
        <button style={styles.buttonCont}><CartIcon style={styles.button} /></button>
    )
}

//ESTILOS CSS
const styles = {
    // Carrito de Compras
    buttonCont: {
        width: '115px',
        height: '80%',

        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    button: {
        width: '75px',
        height: '80%',
    },
}

export default CartWidget