import logo from './images/logo.png';
import seloAcademia from './images/img_selo_academia.png';
import logoFundoPreto from './images/img_logo_fundo_preto.jpeg';
import Home from './view/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row text-center px-auto mx-auto">
          <div class="col w-100"> 
              <img src={logo} alt="logo" width="50%"/>
              <h1>CIALE INSPETOR</h1>
           </div>
        </div>
        <Home/>
        <div class="row w-100 mx-auto">
          <div class="col">
            <img src={seloAcademia}  width="20%"/>
            <img src={logoFundoPreto}  width="50%"/>
          </div>
        </div>    
        <div class="row w-100">
          <div class="col ">
            <hr/>
            <h4>www.cialebrasil.com.br</h4>
            <hr/>
          </div>
        </div>  
      </header>
    </div> 
  );
}

export default App;
