import React from 'react';

const Main = () => {
    return(
        <main style={styles.mainContainer}>
            <h1>MAIN</h1>
        </main>
    )
}

//ESTILOS CSS
const styles = {
    //Contenedor del Footer
    mainContainer: {
        gridArea: 'main',
        height:'500px',
        color:'white',
        backgroundColor:'#1b1b1b',
        border: `solid 2px red`,

        display: 'flex',
        justifyContent: 'center',
    }
  }

export default Main