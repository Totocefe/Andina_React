import React, { useState, useEffect } from "react";


function ProductList(){
   
    
    const [productList, setProductList] = useState([]);//

    useEffect(() => {   // este hook nos permite agrupar los 3 ciclos de vida de una sola vez
		fetch("http://localhost:3001/api/product") // aca solicito la api 
		.then(response => response.json()) //el pedido a la api la paso a formato json 
		.then(data => { //data es la informacion q viene del response parseado
             setProductList(data.products)// todas estas propiedades y valores se las adjudico a setLastProducts setCantProducts y setProductList
		})
        
	},[])// paso el array vacio para q se ejecute una sola vez. seria el equivalente al didMount 
return(
    
         
        <div className="listadoProductos">
                <div>
                    <h5>Listado de Productos</h5><hr />
                </div>
                <div>
                    {    
                        productList.map((producto, i) => 
                            <div key={i}>    {/*la i representa al indice .map nos deja poner el elemento y el indice como argumentos */}
                                <p className="productdato1"><p className="titulo"> Descripcion:</p> {producto.description}</p> {/* cada vez q se usa un map de usa un key , estas le van dar a cada elemento una identidad unica para q react las pueda identificar ante cada cambio  */ }
                                <p className="productdato2"><p className="titulo">Precio:</p> ${producto.price}</p>
                                <p className="productdato3"><p className="titulo">Imagen:</p> <img width="100" src={`${producto.image}`} /></p><hr /> 
                            </div>
                        )
                    }
                </div>
        </div>
               
)
}

export default ProductList;
