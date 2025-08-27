import React from "react"

function Item(props) {
    return (
    <div>
        <h2>Carta:{props.producto} </h2>
        <p>Precio: ${props.precio}</p>
    </div>
    )
}

export default Item