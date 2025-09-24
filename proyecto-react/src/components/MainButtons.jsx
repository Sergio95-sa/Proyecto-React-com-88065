import Button from "./Button"


function MainButtons() {
    return (
    <>
        <Button onClick={()=>alert("Boton clickeado")}/>
        <Button color={"blue"} onClick={()=>alert("Otro Boton")}/>
    </>
    )
}

export default MainButtons