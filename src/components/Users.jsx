import React, { useState, useEffect } from "react";


function Users() {
    const [lastUser, setLastUser] = useState([]);
    const [cantUser, setCantUser] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3001/api/user")
		.then(response => response.json())
		.then(data => {
			setLastUser(data.users[data.count-1])
            setCantUser(data.count)
		})
	},[])
    



    return (
       
        <div>
            <div className="contenedorCantidades">
                <h5>Total de Usuarios </h5>
                <span className="numero">{cantUser}</span>
            </div>
            <div className="contenedorCantidades">
                <div>
                    <h5>Ultimo Usuario creado</h5>
                </div>
                <div>
                    <p className="userdato1"><p className="titulo">Nombre:</p>{lastUser.first_name}</p>
                    <p className="userdato2"><p className="titulo">Email:</p>{lastUser.email}</p>
                    <p className="userdato3"><p className="titulo">Avatar:</p> <img width="100" src={`${lastUser.image}`}alt="" /></p>
                
                </div>
            </div>
        </div>

    )
}
export default Users;