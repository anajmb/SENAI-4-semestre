import './App.css';
import DescriptionTitle from './components/DescriptionTitle/DescriptionTitle';
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

     
    </div>
  );
}

export default App;
