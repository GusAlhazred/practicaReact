import { useCartContext } from "../../../context/cartContext/useCartContext"
import { Item } from "../Item/Item"

export const ItemDetail = ({detail}) => {
    console.log(detail)
    const {addItem} = useCartContext()
    return  (
    <>
        <Item {...detail}>
            <p>Pedazo de detalle!</p>
            <button onClick={() => addItem(detail)}>Comprar!</button>
        </Item>
    </>

    )
}