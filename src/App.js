import './App.css';
import Sidebar from "./sidebar"
import Header from "./header"
import Library from './library';

function App() {
  return (
    <div id="main">
      <Header /> 
      <Sidebar />
      <Library />
    </div>
  );
}

export default App;
