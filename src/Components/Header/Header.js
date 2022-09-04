import React from 'react';

const Header = () => {
    return(
        <main style={styles.headerContainer}>
            <h1>HEADER</h1>
        </main>
    )
}

//ESTILOS CSS
const styles = {
    //Contenedor del Footer
    headerContainer: {
        gridArea: 'header',
        height:'500px',
        border: `solid 2px red`,

        display: 'flex',
        justifyContent: 'center',
    }
  }

export default Header