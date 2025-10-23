import { Link } from "react-router-dom"
import { Item } from "../Item/Item"



export const ItemList = ({list}) => {
//   console.log(list.lenght)

  
  return(
    <>{
        (list.lenght !== 0) ?
            list.map((producto) => (
              <Link key={producto.id} to={`/detail/${producto.id}`}>
                <Item key={producto.id} {...producto}/>
                {/* <Item key={producto.id} {...producto}> */}
                    {/* <button key={producto.id}>Comprar</button> */}
                {/* </Item> */}
              </Link>

            ))
        :
        <p>No hay elementos</p>
    }</>
  )
}