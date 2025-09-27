
import Item from './Item';
import ItemListContainer from './ItemListContainer';

function Body() {
    return (
    <div>
        <h1>Tienda de cartas de Yu Gi Oh!</h1>
        <ItemListContainer>
            <Item producto=" Mago Oscuro" precio="5000"/>
            <Item producto=" Bebe Dragon" precio="1200"/>
            <Item producto=" Dragon Blanco de Ojos Azules" precio="6500"/>
            <Item producto=" Dragon Negro de Ojos Rojos" precio="4500"/>
            <Item producto=" Mago del Tiempo" precio="1000"/>
            <Item producto=" Dragon Meteoro Negro" precio="7800"/>
            <Item producto=" Zoa" precio="4600"/>
            <Item producto=" Guardian de la Puerta" precio="8200"/>
            <Item producto=" Maga oscura" precio="4000"/>   
        </ItemListContainer>
    </div>
    )
}

export default Body