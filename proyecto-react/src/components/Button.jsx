

function Button({onClick,color}) {

    const style={
        backgroundColor:color || "crimson",
        padding: "10px, 20px",
        border: "none",
        color:"#fff",
        cursor: "pointer",
    }

    return (
    <button style={style} onClick={onClick}>Click</button>
    )
}

export default Button