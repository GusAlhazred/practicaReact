import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({ titulo }) => {
  const [lista, setLista] = useState([])
  const {category} = useParams()

  useEffect(() => {
    fetch("https://6900bc5cff8d792314bb3953.mockapi.io/products").then(
        (res) => {
            if(!res.ok) throw new Error("Chorld!")
            return res.json()
        }
    ).then(
        (data) => {
          if (category){
            setLista(data.filter((p) =>  p.category.toLowerCase() === category))
          } else {
            setLista(data)
          }
        }
    ).catch((err) => {
      console.log(err)
    })
  },[category])


    return(
        <section>
            <h2>{titulo}</h2>
            <ItemList list={lista}/>
        </section>
    )
}