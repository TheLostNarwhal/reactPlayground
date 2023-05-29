import logo from './logo.svg';
import './App.css';





function NavBar (){
    return (
        <div className='navbar'>
            <a href='https://www.google.com'>Home </a>
            <a href='https://www.google.com'>Projects </a>
            <a href='https://www.google.com'>Contact </a>

        </div>
    )
}
function Hero () {
    const me = {
        name: 'Hernán Silva',
        email: 'hernan97silva@gmail.com',
        phone: '806-207-1894',   
    };
    return(
        <div className='heroContainer'>
            <div className='heroInfo'>
            <p><b>Hi</b> I'm <br/>
            <b>{me.name}</b></p>
            </div>
            <div className='heroImageContainer'>
                <img src='https://img.itch.zone/aW1hZ2UvMjY3MjkvMTA4MjE1LnBuZw==/315x250%23c/td1frL.png'
                alt='imagePlaceholder'
                className='heroImage'></img>
            </div>
        </div>
    );
        
    

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
