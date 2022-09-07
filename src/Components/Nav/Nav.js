import React from 'react';
import ImgLogo from '../../assets/daleal_instruments.png';
import CartWidget from './CartWidget';


// ARRAY CATEGORIAS
const categorias = [
    { id:0, nombre: 'Guitarras Acusticas'},
    { id:1, nombre: 'Guitarras Electricas'},
    { id:2, nombre: 'Bajos'},
    { id:3, nombre: 'Baterias y Percusion'},
    { id:4, nombre: 'Pianos y teclados'},
]


const Nav = () => {
    return (
        <div style={styles.navConteiner} className="nav-cont">
            {/* Imagen Logo del eCommerce */}
            {/* en la ruta coloco la variable logo porque importe el png */}
            <a className='a_logo' style={styles.logo} href="index.html"><img style={styles.logoImg} src={ImgLogo} alt="logo" /></a>


            {/* Nav de la pagina */}
            <nav style={styles.nav}>
                <ul style={styles.nav_ul}>
                    <li style={styles.nav_li}><a style={styles.nav_a} className='nav_a' href="#">PRODUCTOS</a></li>
                    <li style={styles.nav_li}><a style={styles.nav_a} className='nav_a' href="#">NOSOTROS</a></li>
                    <li style={styles.nav_li}><a style={styles.nav_a} className='nav_a' href="#">CONTACTO</a></li>
                    <li style={styles.nav_li}><a style={styles.nav_a} className='nav_a' href="#">USUARIO</a></li>
                </ul>
            </nav>

            {/* Icono Carrito */}
            <CartWidget/>
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
        paddingLeft: '75px',
        paddingRight: '55px',
        backgroundColor: '#333333',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    //----------------------------------------------//

    // Logo eCommerce
    logo:{
        backgroundColor:'bule',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logoImg:{
        width: '115px',
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
        alignItems: 'center',
    },
}

export default Nav