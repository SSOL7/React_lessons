import Albeau from './Albeau';
import './App.css';
import Header from './Header';
import Lita from './Lita';
import MAIN_CLASS from './Main_class';

function App() {
  // json array of objects
  const taming = [
    {
      name: 'Taming', 
      age: 30,
      belt: 'black',
      id: 1
    }
  ]

  const lita = [
    {
      name: 'Lita',
      age: 30,
      belt: 'black',
      id: 2
    }
  ]

  const albeau = [
    {
      name: 'Albeau',
      age: 30,
      belt: 'black',
      id: 3
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Header taming={taming} />
        <Lita lita={lita} />
        <Albeau albeau={albeau} />
        <br />
        <br />
      </header>
        <MAIN_CLASS /> 
    </div>
  );
}

export default App;
