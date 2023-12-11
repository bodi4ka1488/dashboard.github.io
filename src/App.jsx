import "./App.css";
import { Customers } from "./components/Customers/Customers";
import { Sidebar } from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Customers name={"Evano"} />
    </div>
  );
}

export default App;
