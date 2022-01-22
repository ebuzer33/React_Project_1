import Navbar from "./companents/NavBar";
import "./App.css";
import Header from "./companents/Header";
import Menu from "./companents/Menu";

function App() {
  let titleInfo = { title: "Popular Tour Places" };
  return (
    <div>
      <Navbar/>
      <Header info={titleInfo} />
      <Menu/>
    </div>
  );
}

export default App;
