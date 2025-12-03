import "./ProductFormUI.css"
export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit}) => {
  return(
    <section>
        <form onSubmit={onSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input type="text" name="name" value={product.name} onChange={onChange} required/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="price" value={product.price} onChange={onChange} required/>
                {errors.price && <p>{errors.price}</p>}
            </div>
            <div>
                <label>Categoria:</label>
                <input type="text" name="category" value={product.category} onChange={onChange} required/>
                {errors.category && <p>{errors.category}</p>}
            </div>
            <div>
                <label>Descripcion:</label>
                <textarea name="description" value={product.description} onChange={onChange} required/>
                {errors.description && <p>{errors.description}</p>}
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" accept="/image/*" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} required/>
                {errors.file && <p>{errors.file}</p>}
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Guardando..." : "Guardar"}
            </button>
        </form>
    </section>
  )
}