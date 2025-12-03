export const validateProduct = (product, fileRequired=true) => {
  const errors = {}

  if(!product.name.trim()){
    errors.name = "El nombre es obligatorio"
  }

  if(!product.price || product.price <=0){
    errors.price = "El precio debe ser mayor a cero"
  }

  if(!product.description.trim()){
    errors.description = "El producto debe tener una descripcion"
  }

  if (!product.category.trim()){
    errors.category = "El producto debe tener una categoria"
  }

  if(!product.file && fileRequired){
    errors.file = "Debes agregar una imagen"
  }
  return errors
}