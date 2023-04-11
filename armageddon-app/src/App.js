import logo from './logo.svg';
import './App.css';
import {Button} from "./button/Button";
const Greetings = (props) => <div>Hello! {props.firstName} {props.lastName}?</div>;
function App() {
  return (
    <div className="App">
     <h1 className = {"header"} style={{backgroundColor: "yellow"}}>"After registation""</h1>
        <div> <Greetings firstName = "Eugene" lastName = "Firsov"/></div>
        <Button/>
    </div>
  );
}

export default App;
