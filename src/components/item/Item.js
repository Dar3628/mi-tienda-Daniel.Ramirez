const Item = ({name, price, id, setselectedItem})
const selectedItem = () => {};

const Item = ({name, price, setSelectedItem}) => {
  return (
    <div>
        <h2>Nombre del Producto: {name}</h2>
        <h2>Precio del Producto : {price}</h2>
        <button onClick={() => setSelectedItem(id)}>Seleccionar producto</button>
        <hr />
    </div>
  )
}

Item.propTypes = {

}

export default Item
