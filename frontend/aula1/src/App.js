import './App.css';
import Contador from './components/Contador/Contador';
import DescriptionTitle from './components/DescriptionTitle/DescriptionTitle';
import Digitador from './components/Digitador/Digitador';
import Formulario from './components/Formulario/Formulario';
import TextTitle from './components/TextTitle/TextTitle';

function App() {
  return (
    <div className="App">
     Olá Mundo!

     <TextTitle/>
     <DescriptionTitle 
      titulo={"Aula de frontend"} 
     descricao={"Uma aula de frontend"}
     />

     <Contador/>
     <Formulario/>
     <Digitador/>

     
    </div>
  );
}

export default App;
