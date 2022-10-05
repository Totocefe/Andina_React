import React from "react";
import {NavLink, Link} from 'react-router-dom' // el componente route nos permite definir q componente se va a renderizar en pantalla segun la ruta espesificada

function Header(){
return(
    <div className="header">
        <img src="/logo.jpg" className="logo"/>
        <h2>Hola Administrador</h2>
            <hr />
        
            <Link className="link" to="/">Dashboard</Link><br />
            <NavLink className="link" to="/productos" activeClassName="active">Productos</NavLink><br />
            <NavLink className="link" to="/usuarios" activeClassName="active">Usuarios</NavLink><br />
             <hr />
             <hr />
            
    </div>
)
}
export default Header;