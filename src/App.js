import logo from './logo.svg';
import './App.css';
import { Page1 } from './components/Page1';
import  Cards from './components/Cards'
import Title from './components/Title';
import Ellipse from './components/Ellipse';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="container">
      <Page1/>
      <Todolist/>
      <Cards/>
      <Title/>
      <Ellipse/>
    </div>
    
  );
}

export default App;
