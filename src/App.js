import './App.css';
import Header from './components/Header';
import Noticia from './components/Noticia';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Noticia titulo = 'Priemr Noticia' descripcion ='detalle de primera noticia'></Noticia>
      <Noticia titulo = 'Segunda Noticia'></Noticia>
      <ClassComponent titulo = 'Este es el class Component'></ClassComponent>
    </div>    
  );
}

export default App;
