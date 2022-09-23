import React from 'react';
import Logo from '../../assets/img/logo/logo_01_white.png'
//Import Components
import CartWidget from './CartWidget';

const Nav = () => {
    return (
        <div style={styles.navConteiner} className='nav-conteiner'>

            {/* Imagen Logo del eCommerce */}
            <a className='a_logo' style={styles.logo} href="index.html"><img src={Logo} style={styles.logoImg} alt="logo" /></a>

            {/* Nav de la pagina */}
            <nav style={styles.nav}>
                <ul style={styles.nav_ul}>
                    <li className='nav_li' style={styles.nav_li}><a className='nav_a' style={styles.nav_a} href="#">PRODUCTOS</a></li>
                    <li className='nav_li' style={styles.nav_li}><a className='nav_a' style={styles.nav_a} href="#">NOSOTROS</a></li>
                    <li className='nav_li' style={styles.nav_li}><a className='nav_a' style={styles.nav_a} href="#">CONTACTO</a></li>
                    <li className='nav_li' style={styles.nav_li}><a className='nav_a' style={styles.nav_a} href="#">USUARIO</a></li>
                </ul>
            </nav>

            {/* Icono Carrito */}
            <CartWidget />

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
        paddingLeft: '50px',
        paddingRight: '50px',
        backgroundColor: '#333333',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    //----------------------------------------------//

    // Logo eCommerce
    logo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logoImg: {
        width: '210px',
    },

    //----------------------------------------------//

    //Nav
    nav: {
        height: '100%',
        display: 'flex',
    },

    //Nav-ul
    nav_ul: {
        height: '100%',

        display: 'flex',
        alignItems: 'center',
    },

    //Nav-ul-li-a
    nav_li: {
        height: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Nav-ul-li-a
    nav_a: {
        height: '100%',
        color: 'white',

        padding: `0px 30px`,
        fontSize: '15px',
        fontWeight: '500',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },

    //----------------------------------------------//
    // btn: {
    //     width: '210px',
    //     display: 'flex',
    //     justifyContent: 'end',

    // },

    // btn_img: {
    //     width: '34px',
    // },
}
export default Nav