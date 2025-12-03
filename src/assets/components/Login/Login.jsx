import { useState } from "react"
import { useAuthContext } from "../../../context/AuthContext/useAuthContext"
import { useNavigate, Navigate } from "react-router-dom"

export const Login = () => {
    const [userForm, setUserForm ] = useState({name: "", password: ""})

    const {user, login} = useAuthContext();

    const navigate = useNavigate()

    const handleChange = (e) => {
      const { name, value}  = e.target
      setUserForm({...userForm, [name]: value})

    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const success = login(userForm.name, userForm.password)

      if (success){
        navigate("/admin/alta-productos")
      }else {
        alert("Credenciales incorrectas")
        setUserForm({name: "", password: ""})
      }
    }

    if (user){
        return <navigate to="/admin/alta-productos" />
    } 

    return <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesion</h2>
        <div>
            <label htmlFor="">Usuario:</label>
            <input type="text" name="name" value={userForm.name} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">Contraseña:</label>
            <input type="password" name="password" value={userForm.password} onChange={handleChange}/>
        </div>
        <button type="submit">Iniciar Sesion</button>
    </form>
}