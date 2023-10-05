import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Dictionary</h1>
        <div className="citation">
          If a word in the dictionary were misspelled, how would we know?
          -Steven Wright
        </div>
        <main>
          {" "}
          <Dictionary />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/sandra-pla%C4%8Denyt%C4%97-208403191/"
            target="_blank"
            rel="noopener noreferrer"
            className="name-tag"
          >
            Sandra Plačenytė
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Sandruttee/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
            className="git-tag"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>{" "}
    </div>
  );
}

export default App;
