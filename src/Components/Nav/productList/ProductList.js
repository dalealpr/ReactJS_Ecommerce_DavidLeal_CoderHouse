import React from 'react';
//Import Link Router
import {Link,NavLink} from "react-router-dom";

const ProductList = () => {
    return(
    // <div className='prodList-container' id='contListaPrd' style={styles.prodListContainer}>
        <ul className='menu_ver' style={styles.prodList_ul}>
            <li style={styles.prodList_li}><NavLink className='nav_a_list' to={'/productos/:IdCategoria'} style={styles.NavLink}>Guitarras Acusticas</NavLink></li>
            <li style={styles.prodList_li}><NavLink className='nav_a_list' to={'/productos/:IdCategoria'} style={styles.NavLink}>Guitarras Electricas</NavLink></li>
            <li style={styles.prodList_li}><NavLink className='nav_a_list' to={'/productos/:IdCategoria'} style={styles.NavLink}>Bajos</NavLink></li>
            <li style={styles.prodList_li}><NavLink className='nav_a_list' to={'/productos/:IdCategoria'} style={styles.NavLink}>Baterias</NavLink></li>
            <li style={styles.prodList_li}><NavLink className='nav_a_list' to={'/productos/:IdCategoria'} style={styles.NavLink}>Teclados</NavLink></li>
        </ul>
    // </div>
    )
}


//ESTILOS CSS
const styles = {
    prodListContainer:{
        width: '100%',
        height: '80px',
        position: 'absolute',
        right: '0',
        marginTop: '150px',
        display:'none',
        backgroundColor: '#505050',
        alignItems: 'center',
        justifyContent: 'center',
    },

    prodList_ul: {
        width: '100%',
        height: '80px',
        marginTop: '150px',
        position: 'absolute',
        right: '0',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#505050',
        gap: '50px',
    },

    //Nav-ul-li-a
    prodList_li: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    NavLink:{
        height: '100%',
        fontSize: '16px',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_img: {
        width: '34px',
    },
}


export default ProductList;