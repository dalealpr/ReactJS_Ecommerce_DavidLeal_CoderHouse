import React from 'react';
import CartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {
    return (
        <div style={styles.navConteiner} className="nav-cont">
            {/* Imagen Logo del eCommerce */}
            {/* en la ruta coloco la variable logo porque importe el png */}
            <a className='a_logo' href="index.html"><img src="" alt="logo" /></a>


            {/* Nav de la pagina */}
            <nav style={styles.nav}>
                <ul style={styles.nav_ul}>
                    <li><a style={styles.nav_li} className='nav_a' href="#">PRODUCTOS</a></li>
                    <li><a style={styles.nav_li} className='nav_a' href="#">NOSOTROS</a></li>
                    <li><a style={styles.nav_li} className='nav_a' href="#">CONTACTO</a></li>
                    <li><a style={styles.nav_li} className='nav_a' href="#">USUARIO</a></li>
                </ul>
            </nav>

            <button><CartIcon /></button>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    //Contenedor del Nav
    navConteiner: {
        gridArea: 'nav',
        height: '60px',
        border: `solid 2px red`,
        color: 'white',
        padding: `0 60px`,
        backgroundColor: '#333333',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    //Nav
    nav: {
        display: 'flex',
    },

    //Nav-ul
    nav_ul: {
        display: 'flex',
        alignItems: 'center',
    },

    //Nav-li
    nav_li: {
        color: 'white',
        padding: `0 30px`,
    }
}

export default Nav