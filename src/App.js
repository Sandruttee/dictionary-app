import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">DICTIONARY</div>
        <main>
          {" "}
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Sandra Pačenytė</footer>
      </div>{" "}
    </div>
  );
}

export default App;
