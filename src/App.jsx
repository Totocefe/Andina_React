
import './App.css';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom'; // el componente route nos permite definir q componente se va a renderizar en pantalla segun la ruta espesificada
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import Home from './components/Home';

function App() {
  return (
   
    
    <div>
        
      <div className='encabezado'>
        <Header></Header>
      </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/productos" component={ProductList}/>
          <Route exact path="/usuarios" component={UserList}/>
        </Switch>

    </div>
     
      
    
     
  )
}

export default App;
