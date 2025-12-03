import { useCartContext } from "../../../context/cartContext/useCartContext"
import { Item } from "../Item/Item"
import { Count } from "../Count/Count"

export const ItemDetail = ({detail}) => {
    // console.log(detail)
    const {addItem} = useCartContext()

    const handleAdd = (quantity) => {
      addItem({...detail, quantity})
    }

    return  (
    <>
        <Item {...detail}>
            <p>Pedazo de detalle!</p>
            {/* <button onClick={() => addItem(detail)}>Comprar!</button> */}
            <Count btnText={"Agregar al Carrito"} onConfirm={handleAdd}/>
        </Item>
    </>

    )
}