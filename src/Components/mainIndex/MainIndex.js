import React from 'react';
import ItemDetailContainer from '../containers/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer';

const MainIndex = ({greeting}) => {
    return (
        <div className='mainIndex-container' style={styles.mainIndex}>
            <ItemListContainer greeting={greeting}/>
            <ItemDetailContainer/>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    mainIndex:{
        padding:'0 0 40px 0',
        color:'black',
        textAlign:'center',
        border: `solid 4px blue`,
        backgroundColor: '#ebebeb',
    }

}
export default MainIndex