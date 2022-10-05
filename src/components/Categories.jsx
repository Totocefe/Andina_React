import React, { useState, useEffect } from "react";

function Categories(){
    const [categories, setCategories] = useState([]);
    const [cantCategories, setCantCategories] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3001/api/product")
		.then(response => response.json())
		.then(data => {
            setCategories(data.countByCategory)
            setCantCategories(data.countByCategory.length)
		})
	},[])


    return ( 
        <div>						
            <div className="contenedorCantidades">
                <h5>Total de Categorias</h5>
                <span className="numero">{cantCategories}</span>
            </div>
            <div className="contenedorCantidades">
                <div>
                    <h5>Categorias de productos </h5>
                </div>
                <div>
                    
                    {
                        categories.map((category, i) => (
                            <div key={i}>
                                <span className="titulo">{category.name}:</span><span className="" > {category.cant}</span>
                            </div>
                        ))
                    }               
                    
                </div>
            </div>
        </div>
    )
}

export default Categories