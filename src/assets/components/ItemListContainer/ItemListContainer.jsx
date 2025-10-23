import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ titulo }) => {
  const [lista, setLista] = useState([])

  useEffect(() => {
    fetch("/data/productos.json").then(
        (res) => {
            if(!res.ok) throw new Error("Chorld!")
            return res.json()
        }
    ).then(
        (data) => {
          setLista(data)
        }
    ).catch((err) => {
      console.log(err)
    })
  },[])
    return(
        <section>
            <h2>{titulo}</h2>
            <ItemList list={lista}/>
        </section>
    )
}