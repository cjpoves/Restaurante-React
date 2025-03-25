import { Link, useNavigate } from "react-router";
import "./LogInForm.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const LogInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        //Funcion para acceder con email y contraseña de firebase
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //Navega a la página si el inicio de sesión es éxitoso
          navigate("/adminPage");
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(error.message)
            // Limpiar mensaje de error
            setTimeout(() => {
                setError('')
           }, 2000)
        });
    }

    return(
        <>
        
        <form onSubmit={handleSubmit} className="logForm">
            <h1 className="textoForm">Ingresar</h1>

            <input className="inputForm"
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            
            <input className="inputForm"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            
        
        <button className="buttonForm" type="submit"
        >Acceder</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}        

        </>
    )
}