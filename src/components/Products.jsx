import React, { useState, useEffect } from "react";// los hooks no se pueden usar en componentes de clases

function Products(){
    const [lastProduct, setLastProducts] = useState([]); //use state es una funcion y es a su vez el estado inicial por eso tiene un array vacio luego ese array de va a completar con el useEffect hay tantos useState como variables,lastProduct se va a cargar cuando haga el pedido a la api es decir cuando use useEfect.
    const [cantProduct, setCantProducts] = useState([]);//  el valor en azul representa el estado actual y el valor amarillo es quien alamecena la funcion q permite actualizar el estado inicial 
   

    useEffect(() => {   // este hook nos permite agrupar los 3 ciclos de vida de una sola vez
		fetch("http://localhost:3001/api/product") // aca solicito la api 
		.then(response => response.json()) //el pedido a la api la paso a formato json 
		.then(data => { //data es la informacion q viene del response parseado
            
			setLastProducts(data.products[data.count-1]) // variable data tiene la propiedad q traigo de la api segun la configuaracion q haya hecho
            setCantProducts(data.count)                  // -en este caso products es una propiedad q tiene un array y count es otra propiedad q contuene otro valor
            
		})
        
	},[])// paso el array vacio para q se ejecute una sola vez. seria el equivalente al didMount 
    
    return(
        <div>
            <div className="contenedorCantidades">
                <h5>Total de Productos</h5>
                <span className="numero">{cantProduct}</span>
            </div>
            <div className="contenedorCantidades">
                <div>
                    <h5>Ultimo producto creado</h5>
                </div>
                <div>
                    <p className="productdato1"><p className="titulo">Nombre:</p> {lastProduct.name}</p> 
                    <p className="productdato2"><p className="titulo">Precio:</p> ${lastProduct.price} </p>
                    <p className="productdato3"><p className="titulo">Descripcion:</p> {lastProduct.description} </p>
                    <p className="productdato4"><p className="titulo">imagen: </p><img width="100" src={`${lastProduct.image}`} /> </p>
                    
                </div>
            </div>
            
        </div>

    );
    
    
}



export default Products;