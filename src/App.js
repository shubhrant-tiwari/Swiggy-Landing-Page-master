import './App.css';
import Nav from "./Components/Hero/Nav";
import Last from "./Components/Footer/Last";
import Mobile from "./Components/Restorent/Mobile";
import Order from "./Components/OrderTrack/Order";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Order/>
    <Mobile/>
    <Last/>
      
    </div>
  );
}

export default App;
