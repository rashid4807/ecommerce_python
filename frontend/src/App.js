import logo from './logo.svg';
import logo1 from './logo1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>SHOPIN</h1>
        <nav>
        <ul className="nav-links">
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact</a></li>
       </ul>
       </nav>

         </header>


         <main className="App-main">
         
        <h2>Main Content</h2>
        <p>This is where the main content of your app will go.</p>
      </main>

      <footer className="App-footer">
        <p>&copy; This is the footer, you should design</p>
      </footer>



    </div>
  );
}

export default App;
