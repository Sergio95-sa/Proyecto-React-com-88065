
import{ useState } from "react"
function ClicksCounters() {
    const [contador,setContador]= useState(0);

    const handleClick =() => {
        setContador(contador+1)
        console.log("Se clickeo el boton")
    }

    return (
    <div>
        <h2>Contemos Clicks!</h2>
        <h2>Clickeaste {contador} veces!</h2>
        <button onclick={handleClick}>Click!</button>
    </div>
    )
}

export default ClicksCounters