import React, { useState, useEffect } from "react";


function UserList(){
   
    
    const [userList, setUserList] = useState([]);//

    useEffect(() => {   // este hook nos permite agrupar los 3 ciclos de vida de una sola vez
		fetch("http://localhost:3001/api/user") // aca solicito la api 
		.then(response => response.json()) //el pedido a la api la paso a formato json 
		.then(data => { //data es la informacion q viene del response parseado
            
			
            setUserList(data.users)// todas estas propiedades y valores se las adjudico a setLastProducts setCantProducts y setProductList
		})
        
	},[])// paso el array vacio para q se ejecute una sola vez. seria el equivalente al didMount 
return(
    
         
        <div className="listadoProductos">
                <div>
                    <h5>Listado de Usuarios</h5><hr />
                </div>
                <div>
                    {    
                        userList.map((usuario, i) => 
                            <div key={i}>    {/*la i representa al indice .map nos deja poner el elemento y el indice como argumentos */}
                                <p className="userdato1"><p className="titulo"> Nombre:</p> {usuario.first_name}</p> {/* cada vez q se usa un map de usa un key , estas le van dar a cada elemento una identidad unica para q react las pueda identificar ante cada cambio  */ }
                                <p className="userdato2"><p className="titulo"> Email:</p> {usuario.email}</p>
                                <p className="userdato3"><p className="titulo"> Avatar:</p> <img width="100" src={`${usuario.image}`} /></p> <hr />
                            </div>
                        )
                    }
                </div>
        </div>
               
)
}

export default UserList;
