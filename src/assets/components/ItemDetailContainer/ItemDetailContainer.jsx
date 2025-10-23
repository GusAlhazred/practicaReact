import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  
    const [item, setItem] = useState({})

    const {id} = useParams();

    useEffect(() => {
        fetch("/data/productos.json").then((res) => {
          if (!res.ok)
            throw new Error("Chorld!")
          return res.json()
        }).then((data) => {
            const itemEncontrado = data.find((pro) => pro.id === id)
            if (itemEncontrado) {
                // console.log(itemEncontrado)
                setItem(itemEncontrado)}
            else
                throw new Error("No se encontro el producto")
        }).catch((err) => {
          console.log(err)
        })
    },[id])

    return(<>
        {
            Object.keys(item).length ?
                (<ItemDetail detail={item}/>)
            :
                <p>Carganding</p>
        }
    </>)
}