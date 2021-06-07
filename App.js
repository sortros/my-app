import logo from './logo.svg';
import './App.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';


function App() {
  return (
    <div className="App">
    
      <header className="App-header">

        <div className= "DivOscuro">
        <div className="MiniLogos">
          <h1 className="Box"> Say hello to <br></br>ReactJS</h1>
          <p className="TextBox">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <div className="ButtonBox">
            <button className="Button">Awesome!</button>
          </div>
        </div>
          
       </div>

        <div className="Logos">
          <div className="MiniLogos">
           <img src={icon1} />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactives UIs.</p>
         </div>

         <div className="MiniLogos">
           <img src={icon2} />
           <h2>Components</h2>
           <p>Build encapsulated components that manage their state.</p>
           </div>

          <div className="MiniLogos">
            <img src={icon3} />
            <h2>Single way</h2>
            <p>A set of immutable values are passed to the component's</p>
          </div>

          <div className="MiniLogos">
            <img src={icon4} />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modernm browsers.</p>
         </div>
    
        </div>
      </header>
    </div>
  );
}

export default App;
