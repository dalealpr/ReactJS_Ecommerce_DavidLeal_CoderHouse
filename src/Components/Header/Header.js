import React from 'react';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer';

const Header = () => {
    return (
        <div className='header-container' style={styles.headerCont}>
            <h1>HEADER</h1>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    headerCont:{
        height: '200px',
        gridArea: 'header',
        border: `solid 3px red`,
        backgroundColor: '#F4D03F',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Header