import { Fragment } from "react"

const FuntionalComponent = ({name, age}) => {
    return (
        <Fragment>
            <h1>FuntionalComponent</h1>
            <h2> Nombre: {name}</h2>
            <h2> Edad: {age}</h2>
        </Fragment>
    )
}

export default FuntionalComponent
