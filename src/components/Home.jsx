import React from "react";
import Products from "./Products";
import Users from "./Users";
import Categories from "./Categories";

function Home (){
return(
    <div className="App">
    <div className="contenedorDatos">
    <Products ></Products>
  </div>
  <div className="contenedorDatos">
    <Users></Users>
  </div>
  <div className="contenedorDatos">
    <Categories/>
  </div>
  </div>
)
}

export default Home