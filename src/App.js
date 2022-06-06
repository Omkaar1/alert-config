import "./App.css";
//import { Alert } from "./Components/Alert";
import Table from "./Components/Table";

function App() {
  return (
    <div className="App">
      <h1>Alert configuration</h1>
      <hr />
      <div className="nav">
        <h3>(+)</h3>
        <h3>Alert Name</h3>
        <h3>Independent variable</h3>
        <h3>Dependent variable</h3>
        <h3>Frequency</h3>
        <h3>Save</h3>
      </div>
      <hr />
      <Table />
    </div>
  );
}

export default App;
