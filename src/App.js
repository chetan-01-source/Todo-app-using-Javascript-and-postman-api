import logo from './logo.svg';
import './App.css';
import { Page1 } from './components/Page1';
import  Cards from './components/Cards'
import Title from './components/Title';
import Ellipse from './components/Ellipse';
import Todolist from './components/Todolist';
import Popup from './components/Popup';

function App() {
  return (
    <div className="container">
      <Page1/>
      <Cards/>
      <Title/>
      <Ellipse/>
      <Popup/>
    </div>
    
  );
}

export default App;
