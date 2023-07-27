import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
