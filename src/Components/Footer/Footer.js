import React from 'react';

const Footer = () => {
    return(
        <footer style={styles.footerContainer}>
            <h1>FOOTER</h1>
        </footer>
    )
}

//ESTILOS CSS
const styles = {
    //Contenedor del Footer
    footerContainer: {
        gridArea: 'footer',
        height:'300px',
        border: `solid 2px red`,

        display: 'flex',
        justifyContent: 'center',
    }
  }

export default Footer
