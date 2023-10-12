import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather defaultCity="Kharkiv" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/72575-nataliia-shpak"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Nataliia Shpak{" "}
        </a>{" "}
        {"  "}
        and it is{" "}
        <a
          href="https://github.com/NataliShpak/react-week5"
          target="_blank"
          rel="noreferrer"
        >
          open-sources on GitHub{" "}
        </a>{" "}
        and hosted on Netlify
      </footer>
    </div>
  );
}
