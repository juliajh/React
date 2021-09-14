import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Counter from './components/Counter/Counter';
import ChangeColor from './components/Changecolor/Changecolor';
import Changesize from './components/Changesize/Changesize';
import Length from './components/Length/Length';
import Alert from './components/Alert/Alert';

function App() {
  return (
    //최상단 component
     <div className="App">
      <Header/>
      <Counter/>
      <ChangeColor/>
      <Changesize/>
      <Length/>
      <Alert/>
    </div>
  );
}

export default App;
