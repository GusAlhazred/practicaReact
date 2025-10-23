


export const Item = ({id, name, price, category, description, imageUrl, children}) => {
    // console.log("asd")
    return (
        <article> 
            <img src={imageUrl} alt={description} />
            <p>{name}</p>
            <p>Precio: {price}</p>
            <p>{category}</p>
            <p>{description}</p>
            {children}
        </article>)
}