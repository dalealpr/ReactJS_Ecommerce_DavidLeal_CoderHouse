import React from 'react';


const ItemList = ({greeting}) => {
    return (
            <h1 style={styles.h1}>{greeting}</h1>
    )
}

//ESTILOS CSS
const styles = {
    h1:{
        backgroundColor: '#F4D03F',
        padding:'30px 0',
        color:'black',
        textAlign:'center',
    }

}

export default ItemList